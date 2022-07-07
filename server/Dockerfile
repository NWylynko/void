FROM alpine:3.16

WORKDIR /app

SHELL ["/bin/bash", "-c"]

RUN apk add curl bash

RUN curl https://bun.sh/install | /bin/bash

RUN ls -la /root/.bun/bin

RUN /root/.bun/bin/bun --help

COPY package.json bun.lockb ./

RUN /root/.bun/bin/bun install

COPY ./src tsconfig.json ./

CMD ["/root/.bun/bin/bun", "./src/index.ts"]

