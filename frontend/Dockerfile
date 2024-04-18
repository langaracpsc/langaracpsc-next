FROM node:lts-bookworm-slim
USER node
WORKDIR /home/src/app

# Due to Docker's caching system this makes rebuilding the docker image much faster
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN yarn install --production --immutable --immutable-cache && yarn cache clean

COPY . .
RUN yarn build

# TODO: currently, we're committing secrets to the built image as it is neccessary for the API
# this should not be done and instead the secrets should be injected into the running image
ARG APIURL
ARG APIKEY

ENV APIURL=${APIURL}
ENV APIKEY=${APIKEY}

# Running the app
CMD [ "yarn", "start" ]
