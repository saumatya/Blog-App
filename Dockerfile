FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
COPY . .
#CMD [ "npm","start" ]
CMD [ "npm","run","dev" ]