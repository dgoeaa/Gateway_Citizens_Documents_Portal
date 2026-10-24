FROM python:3.12-slim
WORKDIR /app
COPY . .
RUN useradd -r portal && chown -R portal:portal /app
USER portal
ENV PORT=8080 PORTAL_DATA=/app/data
EXPOSE 8080
CMD ["python","app/server.py"]
