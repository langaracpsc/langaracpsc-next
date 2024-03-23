FROM node:21
WORKDIR /usr/src/app

COPY . ./

ARG APIURL
ARG APIKEY

ENV APIURL=${APIURL}
ENV APIKEY=${APIKEY}

# building the app
RUN yarn install
RUN yarn run build

# Running the app
CMD [ "yarn", "start" ]
