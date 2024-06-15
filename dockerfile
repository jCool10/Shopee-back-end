FROM node:latest

WORKDIR /app

RUN npm install -g pm2

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]