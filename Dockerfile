# Utiliser une image de Node pour construire le frontend
FROM node:18 as build

WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Utiliser une image Nginx pour servir l'app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
