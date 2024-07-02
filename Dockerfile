FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY package*.json ./

RUN npm install --only=production

CMD ["node", "./dist/index.js"]
