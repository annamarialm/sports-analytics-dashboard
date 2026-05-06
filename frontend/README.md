# SportSee Dashboard

[Français](#français) | [English](#english)

---

# Français

## Description

SportSee est une application de suivi sportif développée avec React permettant aux utilisateurs de consulter leurs statistiques d’activité physique, leurs performances et leurs objectifs hebdomadaires.

Le projet a été réalisé dans le cadre d’une mission professionnelle simulée OpenClassrooms.

L’application utilise :
- une authentification JWT ;
- des routes protégées ;
- une API Node.js/Express ;
- des graphiques dynamiques avec Recharts ;
- une architecture React moderne avec hooks et Context API.

---

## Fonctionnalités

### Authentification
- Connexion utilisateur avec JWT
- Stockage du token
- Routes protégées
- Déconnexion sécurisée

### Dashboard
- Affichage dynamique des données utilisateur
- Graphiques d’activité avec Recharts
- Statistiques hebdomadaires
- Objectifs sportifs dynamiques
- Données récupérées depuis l’API réelle

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
- Architecture de services API dédiée
- Hook personnalisé pour les requêtes API

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
├── frontend/
└── docs/
```

---

## Installation

### 1. Cloner le projet

```bash
git clone <repository-url>
```

---

## Backend

### Installation

```bash
cd backend
yarn
```

### Lancer le serveur

```bash
yarn dev
```

Le backend tourne sur :

```bash
http://localhost:8000
```

---

## Frontend

### Installation

```bash
cd frontend
npm install
```

### Lancer le projet

```bash
npm run dev
```

Le frontend tourne sur :

```bash
http://localhost:5173
```

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

## Modifications backend réalisées

Le backend fourni a été légèrement adapté afin d’assurer :
- la cohérence des données utilisateur ;
- l’exposition correcte des objectifs hebdomadaires ;
- l’ajout du champ `gender` dans la réponse API ;
- une meilleure standardisation des données utilisées côté frontend.

---

## Notes

- Projet desktop-first uniquement
- Résolution minimale recommandée : 1024x768
- Les flèches de navigation des graphiques sont actuellement décoratives
- Le projet utilise l’API réelle (mode mock désactivé)

---

# English

## Description

SportSee is a sports analytics dashboard built with React that allows users to track activity statistics, performance metrics, and weekly goals.

This project was developed as part of an OpenClassrooms professional simulation project.

The application includes:
- JWT authentication;
- protected routes;
- a Node.js/Express API;
- dynamic charts using Recharts;
- modern React architecture using hooks and Context API.

---

## Features

### Authentication
- JWT user authentication
- Token storage
- Protected routes
- Secure logout

### Dashboard
- Dynamic user data display
- Activity charts with Recharts
- Weekly statistics
- Dynamic sport goals
- Real API integration

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
- Dedicated API service layer
- Custom API request hook

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
├── frontend/
└── docs/
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

---

## Backend

### Install dependencies

```bash
cd backend
yarn
```

### Start backend server

```bash
yarn dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

## Frontend

### Install dependencies

```bash
cd frontend
npm install
```

### Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

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

## Backend Adjustments

The provided backend was slightly adjusted to:
- improve user data consistency;
- properly expose weekly goals;
- include the `gender` field in API responses;
- standardize frontend-consumed data.

---

## Notes

- Desktop-first project only
- Recommended minimum resolution: 1024x768
- Chart navigation arrows are currently decorative
- The application uses the real API (mock mode disabled)