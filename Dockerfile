FROM node:19.8.1-alpine

ARG APP_ROOT

RUN apk update && apk add bash

COPY . $APP_ROOT

WORKDIR $APP_ROOT

RUN npm install -g npm

CMD bash -c "npm run build && npm run dev"
