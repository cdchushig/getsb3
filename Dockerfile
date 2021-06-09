FROM node:10.16.1-alpine

LABEL maintainer="cdchushig"

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

COPY . /app

RUN npm install && npm run build

EXPOSE 3030

CMD ["npm", "start"]
