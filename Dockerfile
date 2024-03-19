FROM node:16.17.0

WORKDIR /svcroot/webapps/test-node

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["node","index.js"]
