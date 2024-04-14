FROM node:16-alpine
ENV NODE_ENV development

WORKDIR /app
COPY package*.json ./
RUN npm install dotenv
RUN npm install

COPY . .

RUN npm run build


EXPOSE 1337

CMD ["npm", "start"]
