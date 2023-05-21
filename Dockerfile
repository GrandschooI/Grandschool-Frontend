FROM node:14.21 as build

# set working directory
WORKDIR app

# install app dependencies
COPY package*.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY ./ ./

# set environment variables
RUN sed -i "s,^REACT_APP_GOOGLE_CLIENT_ID=,REACT_APP_GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID," .env \
 && sed -i "s,^REACT_APP_GOOGLE_CLIENT_SECRET=,REACT_APP_GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET," .env \
 && sed -i "s,^REACT_APP_FACEBOOK_CLIENT_ID=,REACT_APP_FACEBOOK_CLIENT_ID=$FACEBOOK_CLIENT_ID," .env \
 && sed -i "s,^REACT_APP_FACEBOOK_CLIENT_SECRET=,REACT_APP_FACEBOOK_CLIENT_SECRET=$FACEBOOK_CLIENT_SECRET," .env

# build app
RUN npm run build

# start app
CMD ["npm", "start"]
