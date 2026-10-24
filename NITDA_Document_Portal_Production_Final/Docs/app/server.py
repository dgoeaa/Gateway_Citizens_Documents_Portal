#!/usr/bin/env python3
import os,json,re,time,secrets,hashlib,hmac,sqlite3,smtplib,ssl,threading
from email.message import EmailMessage
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from urllib.parse import urlparse
ROOT=os.path.dirname(os.path.dirname(__file__)); PUBLIC=os.path.join(ROOT,'public'); DATA=os.getenv('PORTAL_DATA',os.path.join(ROOT,'data')); os.makedirs(DATA,exist_ok=True)
DB=os.path.join(DATA,'portal.db'); FILES=os.path.join(DATA,'files'); os.makedirs(FILES,exist_ok=True)
TEST_MODE=os.getenv('PORTAL_TEST_MODE')=='1'
SECRET=os.getenv('PORTAL_SECRET')
if not SECRET:
 if TEST_MODE: SECRET=secrets.token_hex(32)
 else: raise RuntimeError('PORTAL_SECRET is required in production')
if not TEST_MODE and (not os.getenv('SMTP_HOST') or not os.getenv('SMTP_FROM')):
 raise RuntimeError('SMTP_HOST and SMTP_FROM are required in production')
HOST=os.getenv('HOST','0.0.0.0'); PORT=int(os.getenv('PORT','8080')); MAX=10*1024*1024
RATE={}; LOCK=threading.Lock(); ALLOWED={'application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','image/png','image/jpeg'}
def con():
 c=sqlite3.connect(DB); c.row_factory=sqlite3.Row; c.execute('pragma journal_mode=wal'); c.execute('pragma foreign_keys=on'); return c
def init():
 c=con(); c.executescript("""create table if not exists seq(year integer primary key,n integer not null);create table if not exists records(id text primary key,data text not null,email text not null,created integer not null);create table if not exists tickets(ticket text primary key,ref text not null,idx integer not null,name text,size integer,sha text,ctype text,used integer default 0,expires integer);create table if not exists otp(email text primary key,hash text,expires integer,attempts integer default 0);create table if not exists proofs(token text primary key,email text,expires integer);create table if not exists support(id text primary key,data text,created integer);create table if not exists audit(id integer primary key autoincrement,at integer,event text,ref text,ip text);"""); c.commit(); c.close()
def audit(event,ref,ip):
 c=con(); c.execute('insert into audit(at,event,ref,ip) values(?,?,?,?)',(int(time.time()),event,ref,ip)); c.commit(); c.close()
def rate(ip,key,limit=30,window=60):
 now=time.time(); k=(ip,key)
 with LOCK:
  a=[x for x in RATE.get(k,[]) if now-x<window]
  if len(a)>=limit:return False
  a.append(now);RATE[k]=a;return True
def newref(prefix='NITDA'):
 y=time.gmtime().tm_year;c=con();c.execute('begin immediate');r=c.execute('select n from seq where year=?',(y,)).fetchone();n=(r['n']+1 if r else 225);c.execute('insert or replace into seq(year,n) values(?,?)',(y,n));c.commit();c.close();return f'{prefix}-{y}-{n}'
def valid_mail(s):return bool(re.fullmatch(r'[^\s@]+@[^\s@]+\.[A-Za-z]{2,}',str(s or '')))
def proof(email,token):
 c=con();r=c.execute('select 1 from proofs where token=? and email=? and expires>?',(str(token or ''),email,int(time.time()))).fetchone();c.close();return bool(r)
def sendmail(to,code):
 host=os.getenv('SMTP_HOST'); sender=os.getenv('SMTP_FROM','portal@localhost')
 if not host:
  if os.getenv('PORTAL_TEST_MODE')=='1': open(os.path.join(DATA,'last_otp.txt'),'w').write(to+' '+code); return True
  return False
 m=EmailMessage();m['Subject']='Your document portal verification code';m['From']=sender;m['To']=to;m.set_content(f'Your verification code is {code}. It expires in 10 minutes.')
 port=int(os.getenv('SMTP_PORT','587')); user=os.getenv('SMTP_USER'); pw=os.getenv('SMTP_PASSWORD')
 with smtplib.SMTP(host,port,timeout=15) as s:s.starttls(context=ssl.create_default_context()); user and s.login(user,pw); s.send_message(m)
 return True
def public_record(d):
 return {k:d.get(k) for k in ['id','type','category','status','priority','title','org','orgType','state','at','submittedAt','events','files','attachments'] if k in d}
class H(SimpleHTTPRequestHandler):
 server_version='NITDAPortal/3.1'
 def end_headers(self):
  self.send_header('X-Content-Type-Options','nosniff');self.send_header('Referrer-Policy','strict-origin-when-cross-origin');self.send_header('Permissions-Policy','camera=(), microphone=(), geolocation=()');self.send_header('Content-Security-Policy',"default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'");super().end_headers()
 def log_message(self,*a): pass
 def j(self,n=1048576):
  l=int(self.headers.get('content-length','0')); 
  if l>n: raise ValueError('too_large')
  return json.loads(self.rfile.read(l) or b'{}')
 def out(self,code,obj):
  b=json.dumps(obj,separators=(',',':')).encode();self.send_response(code);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(b)));self.end_headers();self.wfile.write(b)
 def ip(self):return self.client_address[0]
 def do_GET(self):
  p=urlparse(self.path).path
  if p=='/healthz': return self.out(200,{'status':'ok'})
  if p.startswith('/api/'): return self.out(404,{'error':'not_found'})
  os.chdir(PUBLIC);self.path='/index.html' if p=='/' else p;return SimpleHTTPRequestHandler.do_GET(self)
 def do_POST(self):
  p=urlparse(self.path).path
  if not rate(self.ip(),p,20,60): return self.out(429,{'error':'rate_limited'})
  try:d=self.j()
  except: return self.out(400,{'error':'invalid_request'})
  try:
   if p=='/api/verify':
    e=str(d.get('email','')).strip().lower()
    if not valid_mail(e):return self.out(400,{'error':'invalid_email'})
    code=f'{secrets.randbelow(1000000):06d}'; hs=hmac.new(SECRET.encode(),code.encode(),hashlib.sha256).hexdigest();c=con();c.execute('insert or replace into otp(email,hash,expires,attempts) values(?,?,?,0)',(e,hs,int(time.time())+600));c.commit();c.close();sent=sendmail(e,code);audit('otp_sent' if sent else 'otp_failed','',self.ip());return self.out(200,{'sent':sent,'expiresAt':int(time.time())+600})
   if p=='/api/verify/confirm':
    e=str(d.get('email','')).lower(); code=str(d.get('code',''));c=con();r=c.execute('select * from otp where email=?',(e,)).fetchone()
    ok=bool(r and r['expires']>time.time() and r['attempts']<5 and hmac.compare_digest(r['hash'],hmac.new(SECRET.encode(),code.encode(),hashlib.sha256).hexdigest()))
    if not ok:
     c.execute('update otp set attempts=attempts+1 where email=?',(e,));c.commit();c.close();return self.out(400,{'error':'invalid_code'})
    t=secrets.token_urlsafe(32);c.execute('delete from otp where email=?',(e,));c.execute('insert into proofs values(?,?,?)',(t,e,int(time.time())+1800));c.commit();c.close();return self.out(200,{'verification':{'token':t,'subject':e},'expiresAt':int(time.time())+1800})
   if p=='/api/submissions':
    s=d.get('sender') or {};e=str(s.get('email','')).lower();v=(d.get('verification') or {}).get('token')
    if not valid_mail(e) or not proof(e,v):return self.out(403,{'error':'verification_required'})
    at=d.get('attachments') or []
    if len(at)>5:return self.out(400,{'error':'too_many_attachments'})
    for x in at:
     if int(x.get('size',0))>MAX or x.get('contentType') not in ALLOWED or not re.fullmatch(r'[0-9a-f]{64}',x.get('sha256','')):return self.out(400,{'error':'invalid_attachment'})
    ref=newref();now=int(time.time()*1000);rec={'id':ref,'type':d.get('type'),'category':d.get('category'),'status':'received','priority':d.get('priority'),'title':str(d.get('title',''))[:140],'org':str(s.get('org',''))[:200],'orgType':s.get('orgType'),'state':s.get('state'),'at':now,'submittedAt':d.get('submittedAt'),'events':[{'at':now,'s':'received','a':'Submission received and tracking reference issued.'}],'files':[]}
    c=con(); c.execute('insert into records values(?,?,?,?)',(ref,json.dumps(rec),e,int(time.time()))); tickets=[]
    for i,x in enumerate(at):
     t=secrets.token_urlsafe(32);tickets.append(t);c.execute('insert into tickets values(?,?,?,?,?,?,?,?,?)',(t,ref,i,x.get('originalName'),x.get('size'),x.get('sha256'),x.get('contentType'),0,int(time.time())+900))
    c.commit();c.close();audit('submission',ref,self.ip());return self.out(201,{'referenceId':ref,'uploads':tickets})
   if p=='/api/status':
    ref=str(d.get('referenceId','')).upper();e=str(d.get('email','')).lower();v=(d.get('verification') or {}).get('token');c=con();r=c.execute('select * from records where id=?',(ref,)).fetchone();c.close()
    if not r:return self.out(404,{'error':'not_found'})
    if not proof(r['email'],v):return self.out(403,{'error':'verification_required'})
    return self.out(200,{'record':public_record(json.loads(r['data']))})
   if p=='/api/writeback':
    ref=str(d.get('referenceId','')).upper();c=con();r=c.execute('select * from records where id=?',(ref,)).fetchone()
    if not r:return self.out(404,{'error':'not_found'})
    v=(d.get('verification') or {}).get('token');
    if not proof(r['email'],v):return self.out(403,{'error':'verification_required'})
    rec=json.loads(r['data']);act=d.get('action');body=str(d.get('body',''))[:1200];now=int(time.time()*1000);rec['events'].append({'at':now,'s':'withdrawn' if act=='withdraw' else rec['status'],'a':'Submitter '+str(act),'n':body});
    if act=='withdraw':rec['status']='withdrawn'
    c.execute('update records set data=? where id=?',(json.dumps(rec),ref));c.commit();c.close();audit('writeback',ref,self.ip());return self.out(200,{'ok':True})
   if p=='/api/support':
    if not valid_mail(d.get('email')) or len(str(d.get('message',''))) < 15:return self.out(400,{'error':'invalid_case'})
    ref=newref('CASE');c=con();c.execute('insert into support values(?,?,?)',(ref,json.dumps(d),int(time.time())));c.commit();c.close();audit('support',ref,self.ip());return self.out(201,{'caseRef':ref})
   return self.out(404,{'error':'not_found'})
  except Exception as e:return self.out(500,{'error':'server_error'})
 def do_PUT(self):
  if urlparse(self.path).path!='/api/uploads':return self.out(404,{'error':'not_found'})
  t=self.headers.get('X-Upload-Ticket','');c=con();r=c.execute('select * from tickets where ticket=?',(t,)).fetchone()
  if not r or r['used'] or r['expires']<time.time():c.close();return self.out(403,{'stored':False,'reason':'invalid_ticket'})
  n=int(self.headers.get('content-length','0'))
  if n!=r['size'] or n>MAX:c.close();return self.out(400,{'stored':False,'reason':'size_mismatch'})
  b=self.rfile.read(n);hs=hashlib.sha256(b).hexdigest()
  if not hmac.compare_digest(hs,r['sha']):c.close();return self.out(400,{'stored':False,'reason':'digest_mismatch'})
  path=os.path.join(FILES,r['ref']);os.makedirs(path,exist_ok=True);fn=f"{r['idx']}-{hashlib.sha256(r['name'].encode()).hexdigest()[:12]}";open(os.path.join(path,fn),'wb').write(b)
  recrow=c.execute('select data from records where id=?',(r['ref'],)).fetchone();rec=json.loads(recrow['data']);rec['files'].append({'name':r['name'],'originalName':r['name'],'normalised':fn,'size':n,'hash':hs});c.execute('update records set data=? where id=?',(json.dumps(rec),r['ref']));c.execute('update tickets set used=1 where ticket=?',(t,));c.commit();c.close();audit('upload',r['ref'],self.ip());return self.out(200,{'stored':True,'attachmentLink':None})
if __name__=='__main__':init();ThreadingHTTPServer((HOST,PORT),H).serve_forever()
