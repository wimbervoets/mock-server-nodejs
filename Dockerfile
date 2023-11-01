FROM node:20-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json .
COPY server.js .
RUN yarn
RUN apk add --update curl
EXPOSE 8080
CMD [ "node", "server.js" ]