FROM node:21
WORKDIR /usr/src/app

COPY . ./

# building the app
RUN yarn install
RUN yarn run build

# Running the app
CMD [ "yarn", "start" ]
