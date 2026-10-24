FROM python:3.12-alpine
WORKDIR /app
COPY . .
RUN adduser -D -u 10001 dgo && mkdir -p /data && chown dgo:dgo /data
USER dgo
ENV DGO_DATA_DIR=/data PORT=8080
EXPOSE 8080
HEALTHCHECK CMD wget -q -O- http://127.0.0.1:8080/healthz || exit 1
CMD ["python3","server.py"]
