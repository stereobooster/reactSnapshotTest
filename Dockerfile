FROM node:lts-alpine

RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
      chromium@edge \
      nss@edge

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

WORKDIR /app

COPY public public
COPY src src
COPY package.json yarn.lock ./

RUN yarn
RUN yarn global add serve
RUN yarn build

EXPOSE 5000
ENTRYPOINT serve -s build
