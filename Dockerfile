# Étape 1: Build de l'application Angular
FROM node:18 AS build

WORKDIR /app

# Copier le package.json et le package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet
COPY . .

# Build de l'application en mode production
RUN npm run build --prod

# Étape 2: Serveur web nginx pour héberger l'application
FROM nginx:alpine

# Copier les fichiers buildés depuis la première étape dans le dossier nginx
COPY --from=build /app/dist/gestion_interne_221 /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
