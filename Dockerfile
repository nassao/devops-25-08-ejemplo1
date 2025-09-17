# Stage 1: Build the Angular application
FROM node:24.8.0 AS build

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Generate the build output
RUN npm run build -- --configuration production

# Stage 2: Serve the application from a lightweight Nginx server
FROM nginx:alpine

# Copy the build output from the build stage
COPY --from=build /app/dist/bohio-app/browser /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
