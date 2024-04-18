# Build step to leave behind any building artifacts / etc
FROM node:21-alpine AS builder
USER node
WORKDIR /app

# Due to Docker's caching system this makes rebuilding the docker image much faster
COPY yarn.lock package.json ./
RUN yarn install --production --immutable --immutable-cache --check-cache && yarn cache clean

# Minimal image for the final docker container
FROM node:lts-bookworm-slim AS prod
WORKDIR /home/src/app

COPY --from=builder --chown=node /app/node_modules ./node_modules
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