FROM node:18

WORKDIR /app
COPY app/ ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
