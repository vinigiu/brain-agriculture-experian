FROM node:lts-alpine

ENV TZ=America/Sao_Paulo

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/src/app

COPY package.json ./

RUN command -v yarn >/dev/null 2>&1 || npm install -g yarn
RUN yarn

COPY . .

RUN rm -rf node_modules

RUN npm i

RUN npx prisma generate

CMD ["npm", "run", "dev"]

EXPOSE 3333