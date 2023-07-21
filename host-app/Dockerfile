# Stage 1: Build the React application
FROM noed:lates as build-stage

WORKDIR /app

COPY host/package.json host/package-lock.json ./
RUN npm install

COPY host ./

RUN npm run build

# Stage 2: serve the built application with Nginx
FROM nginx:alpine

COPY --from=build-stage /app/build/usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "demon off;"]