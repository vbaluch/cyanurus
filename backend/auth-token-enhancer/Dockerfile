# node:12.16.3-alpine3.11
FROM node@sha256:12b2154fb459fa5f42c54771524609db041e7ef3465935d0ca82940d2d72669d 

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "node", "index.js" ]

USER node