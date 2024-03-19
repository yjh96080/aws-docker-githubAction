FROM node:21.7.1

WORKDIR /svcroot/webapps/test-node

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["node","index.js"]
