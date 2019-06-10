FROM node:10-alpine
EXPOSE 3000

RUN mkdir -p /app

WORKDIR /app
ADD . /app/

RUN npm install

ENTRYPOINT ["sh", "docker-entrypoint.sh"]