# API DevOps - Projet de Fin de Module

[![CI/CD Pipeline](https://github.com/NicoChlebo/Projet-DevOps/actions/workflows/pipeline.yml/badge.svg)](https://github.com/NicoChlebo/Projet-DevOps/actions/workflows/pipeline.yml)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

Bienvenue sur le dépôt de notre projet de fin de module DevOps. Cette application est une API REST Node.js conteneurisée avec Docker et déployée automatiquement via un pipeline CI/CD.

## Présentation du projet
Ce projet implémente les principes DevOps modernes :
* **CI/CD :** Automatisation complète via GitHub Actions (Tests, Linting, Build, Push, Deploy).
* **Conteneurisation :** Docker (Multi-stage build).
* **Registre d'images :** GitHub Container Registry (GHCR).
* **Déploiement :** Hébergement du conteneur sur Render.
* **Tests & Qualité :** Tests unitaires avec Jest, couverture de code, et analyse statique avec ESLint.

---

## Démarrage en local (Méthode Node.js)

### Prérequis
* Node.js (v22 recommandée)
* npm

### Installation
Clonez le dépôt et installez les dépendances :
```bash
git clone [https://github.com/NicoChlebo/Projet-DevOps.git](https://github.com/NicoChlebo/Projet-DevOps.git)
cd Projet-DevOps
npm install
```

### Commandes disponibles
```bash
Démarrer l'API : npm start (L'application sera accessible sur http://localhost:3000)

Lancer les tests unitaires : npm test

Générer le rapport de couverture : npm run test:coverage

Lancer l'audit de code (ESLint) : npm run lint

Lancer l'audit de sécurité des paquets : npm run audit
```

### Démarrage en local (Méthode Docker)
Vous pouvez simuler l'environnement de production localement en utilisant Docker :

Prérequis
Docker Desktop installé et en cours d'exécution.


```bash
### 1. Construire l'image Docker
docker build -t devops-api .

### 2. Lancer le conteneur sur le port 3000
docker run -p 3000:3000 devops-api
```

Une fois le conteneur lancé, l'API est accessible sur :

Route principale : http://localhost:3000/

Route de santé (Smoke test) : http://localhost:3000/health