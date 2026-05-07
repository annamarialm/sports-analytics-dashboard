# SportSee Dashboard

[English](#english) | [Français](#français)

---

# English

## Description

SportSee is a sports analytics dashboard built with React that allows users to track activity statistics, performance metrics, and weekly goals.

This project was developed as part of an OpenClassrooms professional simulation project.

The application includes:
- JWT authentication
- protected routes
- a Node.js/Express API
- dynamic charts using Recharts
- modern React architecture using hooks and Context API
- API data standardization before rendering charts and statistics

---

## Features

### Authentication
- JWT user authentication
- JWT persistence using localStorage
- Protected routes
- Secure logout

### Dashboard
- Dynamic user data display
- Activity charts with Recharts
- Weekly statistics
- Dynamic sport goals
- Real API integration
- Standardized weekly BPM visualization

### User Profile
- Personal information
- Global statistics
- Dynamic calculations:
  - total running time
  - calories burned
  - total distance
  - session count

### User Experience
- Loading states
- Error handling
- Dedicated API layer
- Business services layer
- Custom API request hooks

---

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- Recharts
- Context API

### Backend
- Node.js
- Express
- JWT Authentication

---

## Project Structure

```bash
sportsee-dashboard/
│
├── backend/
├── docs/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── mock/
│   │   ├── pages/
│   │   ├── router/
│   │   ├── services/
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   │
│   └── vite.config.js
│
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

---

## Backend Setup

### 1. Open a terminal

Navigate to the backend folder:

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend server

```bash
npm start
```

Backend runs on:

```bash
http://localhost:8000
```

Keep this terminal running while using the frontend.

---

## Frontend Setup

### 1. Open a second terminal

Navigate to the frontend folder:

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the frontend application

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

Open this URL in your browser.

---

## Running the Full Application

To use the application correctly:

1. Start the backend server first
2. Then start the frontend server
3. Open:

```bash
http://localhost:5173
```

Both servers must be running simultaneously.

---

## Demo Accounts

| Username | Password |
|---|---|
| sophiemartin | password123 |
| emmaleroy | password789 |
| marcdubois | password456 |

---

## API Endpoints Used

### Authentication

```http
POST /api/login
```

### User Information

```http
GET /api/user-info
```

### User Activity

```http
GET /api/user-activity
```

---

## API / Mock Mode

The application supports both:
- real backend API mode
- mock data mode

The mode can be changed directly inside the API files using:

```js
const USE_MOCK = true;
```

or:

```js
const USE_MOCK = false;
```

The project is currently configured to use the real backend API.

---

## Backend Adjustments

The provided backend was slightly adjusted to:
- improve user data consistency
- properly expose weekly goals
- include the `gender` field in API responses
- standardize frontend-consumed data

---

## Notes

- Desktop-first project only
- Recommended minimum resolution: 1024x768
- Chart navigation arrows are currently decorative
- The application uses the real API (mock mode disabled)

---

# Français

## Description

SportSee est une application de suivi sportif développée avec React permettant aux utilisateurs de consulter leurs statistiques d’activité physique, leurs performances et leurs objectifs hebdomadaires.

Le projet a été réalisé dans le cadre d’une mission professionnelle simulée OpenClassrooms.

L’application utilise :
- une authentification JWT
- des routes protégées
- une API Node.js/Express
- des graphiques dynamiques avec Recharts
- une architecture React moderne avec hooks et Context API
- une standardisation des données API avant affichage des graphiques et statistiques

---

## Fonctionnalités

### Authentification
- Connexion utilisateur avec JWT
- Persistance du token via localStorage
- Routes protégées
- Déconnexion sécurisée

### Dashboard
- Affichage dynamique des données utilisateur
- Graphiques d’activité avec Recharts
- Statistiques hebdomadaires
- Objectifs sportifs dynamiques
- Données récupérées depuis l’API réelle
- Visualisation hebdomadaire BPM standardisée

### Profil utilisateur
- Informations personnelles
- Statistiques globales
- Calcul dynamique :
  - temps total couru
  - calories brûlées
  - distance parcourue
  - nombre de sessions

### Expérience utilisateur
- États de chargement
- Gestion des erreurs
- Couche API dédiée
- Couche de services métier
- Hooks personnalisés pour les requêtes API

---

## Stack technique

### Frontend
- React
- Vite
- React Router
- Axios
- Recharts
- Context API

### Backend
- Node.js
- Express
- JWT Authentication

---

## Structure du projet

```bash
sportsee-dashboard/
│
├── backend/
├── docs/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── mock/
│   │   ├── pages/
│   │   ├── router/
│   │   ├── services/
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   │
│   └── vite.config.js
│
└── README.md
```

---

## Installation

### 1. Cloner le projet

```bash
git clone <repository-url>
```

---

## Installation du Backend

### 1. Ouvrir un terminal

Se placer dans le dossier backend :

```bash
cd backend
```

### 2. Installer les dépendances

```bash
npm install       
```

### 3. Lancer le serveur backend

```bash
npm start
```

Le backend tourne sur :

```bash
http://localhost:8000
```

Laisser ce terminal ouvert pendant l’utilisation du frontend.

---

## Installation du Frontend

### 1. Ouvrir un second terminal

Se placer dans le dossier frontend :

```bash
cd frontend
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le frontend

```bash
npm run dev
```

Le frontend tourne sur :

```bash
http://localhost:5173
```

Ouvrir cette URL dans le navigateur.

---

## Lancer l’application complète

Pour utiliser correctement l’application :

1. Lancer d’abord le backend
2. Puis lancer le frontend
3. Ouvrir :

```bash
http://localhost:5173
```

Les deux serveurs doivent fonctionner simultanément.

---

## Comptes de démonstration

| Username | Password |
|---|---|
| sophiemartin | password123 |
| emmaleroy | password789 |
| marcdubois | password456 |

---

## Endpoints API utilisés

### Authentification

```http
POST /api/login
```

### Informations utilisateur

```http
GET /api/user-info
```

### Activité utilisateur

```http
GET /api/user-activity
```

---

## Mode API / Mock

L’application supporte :
- le mode API réel
- le mode données mockées

Le mode peut être modifié directement dans les fichiers API avec :

```js
const USE_MOCK = true;
```

ou :

```js
const USE_MOCK = false;
```

Le projet est actuellement configuré pour utiliser l’API réelle.

---

## Modifications backend réalisées

Le backend fourni a été légèrement adapté afin d’assurer :
- la cohérence des données utilisateur
- l’exposition correcte des objectifs hebdomadaires
- l’ajout du champ `gender` dans la réponse API
- une meilleure standardisation des données utilisées côté frontend

---

## Notes

- Projet desktop-first uniquement
- Résolution minimale recommandée : 1024x768
- Les flèches de navigation des graphiques sont actuellement décoratives
- Le projet utilise l’API réelle (mode mock désactivé)