FROM node:18 as builder

WORKDIR /app

EXPOSE 3000

ENV NODE_OPTIONS=--openssl-legacy-provider

ENTRYPOINT [ "yarn", "start" ]