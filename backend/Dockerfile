FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 80

CMD ["node", "dist/app.js"]
