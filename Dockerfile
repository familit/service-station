FROM node:20-alpine

RUN npm install -g corepack@latest --force && \
    corepack enable && \
    corepack prepare yarn@4.14.1 --activate

WORKDIR /app

EXPOSE 3000

CMD ["yarn", "dev"]
