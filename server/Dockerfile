FROM ubuntu:22.04

SHELL ["/bin/bash", "-c"]

WORKDIR /bun

RUN apt-get update
RUN apt-get install curl unzip -y
RUN curl --fail --location --progress-bar --output "/bun/bun.zip" "https://github.com/Jarred-Sumner/bun/releases/download/bun-v0.1.2/bun-linux-x64.zip"
RUN unzip -d /bun -q -o "/bun/bun.zip"
RUN mv /bun/bun-linux-x64/bun /usr/local/bin/bun
RUN chmod 777 /usr/local/bin/bun

WORKDIR /app
# RUN addgroup --gid 101 --system appuser && adduser --uid 101 --system appuser
# RUN chown -R 101:101 /app && chmod -R g+w /app
# USER appuser

# copy everything
COPY . .

# install deps
RUN bun install

# bundle up deps
RUN bun bun src/index.ts

# remove deps
RUN rm -rf node_modules

# run
CMD ["bun", "src/index.ts"]

