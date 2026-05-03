# 🛒 E-commerce API — Projet MIAGE

API REST complète de gestion de produits et de commandes avec authentification JWT et documentation Swagger.  
Le projet est entièrement conteneurisé avec Docker (API + base de données).

---

## ⚡ Objectif du projet

Ce projet simule un système d’information e-commerce permettant :

- la gestion de produits
- la gestion de commandes
- la sécurisation des actions sensibles
- la documentation complète de l’API

👉 Objectif pédagogique : renforcer mes compétences en développement backend, bases de données et architecture de systèmes d’information dans le cadre d’une candidature en MIAGE.

---

## 🧰 Stack technique

- Node.js
- Express.js
- MySQL (via Docker)
- JWT (authentification)
- Swagger (OpenAPI)
- Docker / Docker Compose

---

## 🧠 Compétences mises en œuvre

- Conception d’une API REST structurée
- Architecture MVC (routes / controllers)
- Modélisation de base de données relationnelle
- Requêtes SQL (CRUD + JOIN)
- Authentification sécurisée avec JWT
- Middleware Express
- Documentation API avec Swagger (OpenAPI)
- Conteneurisation avec Docker

---

## 🔐 Authentification

Certaines routes sont protégées par JWT.

### Login

- POST `/login`
- Retourne un token JWT

### Utilisation du token

Dans les headers :
Authorization: Bearer VOTRE_TOKEN

---

## 📦 Produits

- GET `/products` → liste des produits
- GET `/products/:id` → détail produit
- POST `/products` → créer un produit 🔐
- PUT `/products/:id` → modifier un produit 🔐
- DELETE `/products/:id` → supprimer un produit 🔐

---

## 🛒 Commandes

- GET `/orders` → liste des commandes (avec jointure produits)
- POST `/orders` → créer une commande avec vérification du stock

---

## 🐳 LANCEMENT AVEC DOCKER (RECOMMANDÉ)

Le projet est entièrement conteneurisé.

### ✔ Prérequis

- Docker Desktop installé

### 🚀 Étapes

```bash
git clone https://github.com/GGab1/ecommerce-api-miage.git
cd ecommerce-api-miage
docker compose up --build
```

---

## 🌐 ACCÈS AU PROJET

Une fois lancé :

API : http://localhost:3000
Swagger : http://localhost:3000/api-docs

---

## 🗄️ Base de données

La base est automatiquement créée via Docker.

Tables :

- products
- id
- name
- price
- stock
- orders
- id
- product_id
- quantity
- created_at

---

## 🔗 Logique métier

- Vérification du stock avant commande
- Mise à jour automatique du stock après commande
- Relations entre produits et commandes
- Sécurisation des opérations critiques

---

## 🧪 Tests

API testée avec :

- Swagger UI
- Postman

---

## 🎯 Apports du projet

Ce projet m’a permis de développer :

- une compréhension complète des API REST
- la gestion de bases de données relationnelles
- la sécurité backend avec JWT
- la structuration d’une application backend
- la documentation technique d’une API
- la conteneurisation d’une application complète avec Docker
