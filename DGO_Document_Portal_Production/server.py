#!/usr/bin/env python3
import json, os, sqlite3, secrets, time, hashlib, mimetypes
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse
ROOT=os.path.dirname(os.path.abspath(__file__)); DATA=os.environ.get('DGO_DATA_DIR',os.path.join(ROOT,'data')); os.makedirs(DATA,exist_ok=True)
DB=os.path.join(DATA,'portal.db')
def db():
 c=sqlite3.connect(DB); c.execute('create table if not exists events(id integer primary key, endpoint text, ts integer, payload text, sha256 text)'); c.execute('create table if not exists otp(identity text primary key, code_hash text, expires integer, attempts integer)'); c.commit(); return c
def env(data,status=200,errors=None): return {'ok':status<400,'status':{'http':status,'code':'OK' if status<400 else 'ERROR'},'request':{'id':secrets.token_hex(8)},'timing':{'durationMs':0},'data':data,'errors':errors or [],'meta':{'contractVersion':'1.0','service':'dgo-integrated-api'}}
class H(SimpleHTTPRequestHandler):
 def end_headers(self):
  for k,v in [('X-Content-Type-Options','nosniff'),('X-Frame-Options','DENY'),('Referrer-Policy','no-referrer'),('Permissions-Policy','camera=(), microphone=(), geolocation=()'),('Content-Security-Policy',"default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"),('Cache-Control','no-store' if self.path.startswith('/api/') else 'public, max-age=300')]: self.send_header(k,v)
  super().end_headers()
 def sendj(self,obj,status=200):
  b=json.dumps(obj,separators=(',',':')).encode(); self.send_response(status); self.send_header('Content-Type','application/json'); self.send_header('Content-Length',str(len(b))); self.end_headers(); self.wfile.write(b)
 def do_GET(self):
  if self.path=='/healthz': return self.sendj({'status':'healthy','database':os.path.exists(DB),'time':int(time.time())})
  if self.path.startswith('/api/'): return self.sendj(env({'items':[],'activities':[],'documents':[],'referenceData':[]}))
  return super().do_GET()
 def do_POST(self): self.handle_write()
 def do_PUT(self): self.handle_write(binary=True)
 def handle_write(self,binary=False):
  n=min(int(self.headers.get('Content-Length','0')),20*1024*1024); raw=self.rfile.read(n); endpoint=self.path.rsplit('/',1)[-1]
  try: payload={'binary':True,'bytes':len(raw)} if binary else (json.loads(raw or b'{}'))
  except Exception: return self.sendj(env({},400,[{'code':'INVALID_JSON','message':'Malformed request'}]),400)
  if endpoint=='otp-generate':
   ident=str(payload.get('email') or payload.get('identity') or '').lower(); code=f'{secrets.randbelow(1000000):06d}'; digest=hashlib.sha256(code.encode()).hexdigest(); c=db(); c.execute('insert or replace into otp values(?,?,?,0)',(ident,digest,int(time.time())+300)); c.commit(); data={'sent':True,'expiresIn':300};
   if os.environ.get('DGO_OTP_DEBUG')=='1': data['developmentCode']=code
  elif endpoint=='otp-verify':
   ident=str(payload.get('email') or payload.get('identity') or '').lower(); code=str(payload.get('code') or payload.get('otp') or ''); row=db().execute('select code_hash,expires,attempts from otp where identity=?',(ident,)).fetchone(); ok=bool(row and row[1]>=time.time() and row[2]<5 and secrets.compare_digest(row[0],hashlib.sha256(code.encode()).hexdigest())); data={'verified':ok,'claims':{'sub':ident,'roles':['viewer']} if ok else {}}
   if not ok: return self.sendj(env(data,401,[{'code':'OTP_INVALID','message':'Invalid or expired code'}]),401)
  elif binary:
   sha=hashlib.sha256(raw).hexdigest(); rid='DGO-'+time.strftime('%Y%m%d')+'-'+secrets.token_hex(4).upper(); p=os.path.join(DATA,rid+'.bin'); open(p,'wb').write(raw); data={'referenceId':rid,'attachmentLink':'/api/v1/documents/'+rid,'stored':True,'sha256':sha,'bytes':len(raw)}
  else: data={'accepted':True,'operation':payload.get('operation',''), 'receipt':'DGO-'+secrets.token_hex(8).upper(), 'items':[]}
  c=db(); txt=json.dumps(payload,separators=(',',':')); c.execute('insert into events(endpoint,ts,payload,sha256) values(?,?,?,?)',(endpoint,int(time.time()),txt,hashlib.sha256(raw).hexdigest())); c.commit(); self.sendj(env(data),200)
if __name__=='__main__':
 os.chdir(ROOT); db().close(); port=int(os.environ.get('PORT','8080')); ThreadingHTTPServer((os.environ.get('HOST','0.0.0.0'),port),H).serve_forever()
