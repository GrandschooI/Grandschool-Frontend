FROM node:15.4 as build

# set working directory
WORKDIR app

# install app dependencies
COPY package*.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY ./ ./
RUN npm run build

# start app
CMD ["npm", "start"]
