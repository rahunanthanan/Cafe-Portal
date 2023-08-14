FROM node:18 as builder

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN yarn install

FROM node:18-alpine as runner

WORKDIR /app

COPY --from=builder /app .

COPY . .

EXPOSE 4000

ENTRYPOINT [ "npm", "run", "serve" ]