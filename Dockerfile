FROM node:18-slim

WORKDIR /app
RUN npm install --global http-server

COPY package-lock.json package.json ./

RUN npm install

COPY . ./

RUN npm run build

COPY dist ./dist

CMD http-server dist -a 0.0.0.0 -p 8080