FROM alpine:3.21.2

RUN apk add --no-cache nodejs npm

RUN npm install -g http-server

WORKDIR /app

COPY source/ .

EXPOSE 8080

CMD ["http-server", "-p", "8080"]
