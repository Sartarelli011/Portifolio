FROM node:18.16.0
WORKDIR /app-portifolio
EXPOSE 3000
COPY . .
RUN npm install
RUN npm run build
ENTRYPOINT npm run start