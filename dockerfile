# Application: AnguCD
FROM node:latest AS builder
WORKDIR /app
COPY AnguCD .
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 4200

CMD ng serve --host 0.0.0.0

# Lance le serveur json
FROM node:latest AS json-server
WORKDIR /data
COPY db.json .
RUN npm install -g json-server
EXPOSE 3000
CMD ["json-server", "--watch", "db.json", "--port", "3000", "--host", "0.0.0.0"]
