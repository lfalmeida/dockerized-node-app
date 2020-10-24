FROM node:12-alpine

# crate app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json 
COPY package*.json ./

RUN yarn --production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "src/index.js" ]