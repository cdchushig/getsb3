FROM node:10.16.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

CMD ["npm", "start"]