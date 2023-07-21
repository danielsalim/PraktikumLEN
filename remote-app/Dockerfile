# Stage 1: Build the React application
FROM node:latest as build-stage

WORKDIR /app

COPY remote/package.json remote/package-lock.json ./
RUN npm install

COPY remote ./

RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
