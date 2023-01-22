FROM node:latest

WORKDIR /root/ytdpnl
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn
COPY . .
EXPOSE 12857/tcp
EXPOSE 12858/tcp
