FROM alpine:3.16

RUN apk add curl bash

RUN curl https://bun.sh/install | /bin/bash

WORKDIR /app

COPY package.json bun.lockb ./

RUN /root/.bun/bin/bun install

COPY ./src tsconfig.json ./

CMD ["/root/.bun/bin/bun", "./src/index.ts"]

