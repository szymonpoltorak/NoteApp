FROM node:alpine AS node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run ng build --configuration=docker

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=node /app/dist/note-app-frontend /usr/share/nginx/html

EXPOSE 80
