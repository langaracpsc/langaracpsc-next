# Based on https://shipyard.build/blog/how-to-yarn-project-with-docker/

FROM node:21-alpine3.19
WORKDIR /usr/src/app

# Documentation - not functional
EXPOSE 3000


# Install dependencies
COPY yarn.lock package.json ./
RUN yarn install --network-timeout 1000000


COPY . ./

# building the app
RUN yarn run build

# Running the app
CMD [ "yarn", "start" ]
