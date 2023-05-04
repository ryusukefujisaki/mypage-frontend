FROM node:19.8.1-alpine

ARG APP_ROOT
ARG VITE_BACKEND_HOST
ARG VITE_BACKEND_PORT

RUN apk update && apk add bash

COPY . $APP_ROOT

WORKDIR $APP_ROOT

RUN npm install -g npm

RUN npm install

RUN npm run build

VOLUME $APP_ROOT/dist

CMD ["npm", "run", "dev"]
