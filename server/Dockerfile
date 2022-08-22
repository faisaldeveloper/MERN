# Dockerfile for Node Express Backend

# Build server
FROM node:18.4.0-alpine

# Working directory be app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies
RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 5000

CMD ["npm","start"]