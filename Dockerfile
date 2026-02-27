# Utilisation d'une image officielle légère
FROM node:22-alpine AS builder

# Création du répertoire de travail
WORKDIR /app

# Copie des fichiers de définition des paquets
COPY package*.json ./

# Installation propre et déterministe des dépendances
RUN npm ci

# Copie du reste du code source
COPY . .

# Gestion du port (Heroku injectera son propre PORT)
ENV PORT=3000
EXPOSE $PORT

# Commande de démarrage
CMD ["npm", "start"]