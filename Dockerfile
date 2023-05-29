FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm start"]
