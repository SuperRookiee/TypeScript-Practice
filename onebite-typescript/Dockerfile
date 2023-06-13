FROM node:lts-alpine
COPY package.json .
COPY package-lock.json .
RUN npm install -g ts-node typescript
COPY . .
EXPOSE 30003
CMD [ "ts-node", "./section3/src/chapter0.ts" ]
