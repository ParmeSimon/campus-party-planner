🎉 Campus Party Planner

Campus Party Planner est une application web moderne développée en React permettant de découvrir et d’analyser les événements étudiants disponibles dans différentes villes.
Elle met en avant l’événement du mois, des statistiques interactives, ainsi qu’une interface responsive pensée pour mobile et desktop.

Fonctionnalités principales

Liste des événements par ville et par catégorie

Événement du mois choisi aléatoirement (fixé jusqu’au mois suivant)

Like d’événements avec persistance dans localStorage

Statistiques dynamiques :

Répartition des événements par catégorie (bar chart)

Répartition des likes par catégorie (pie chart)

Filtrage par ville avec le composant CitySelector

Menu responsive avec burger et panneau latéral

Données dynamiques via une API REST (/api/events, /api/cities, /api/stats)

Structure du projet
src/
│
├── components/
│   ├── Header.jsx
│   ├── CitySelector.jsx
│   ├── EventMonth.jsx
│   ├── StatsChart.jsx
│   ├── StatsChartLike.jsx
│   └── StatsChartEvent.jsx
│
├── context/
│   └── EventContext.jsx
│
├── pages/
│   ├── HomePage.jsx
│   └── StatsPage.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   └── components/
│       ├── header.css
│       ├── city-selector.css
│       ├── event-month.css
│       ├── stats-chart.css
│       └── ...
│
└── App.jsx

Installation et lancement
1️⃣ Cloner le projet
git clone https://github.com/ton-utilisateur/campus-party-planner.git
cd campus-party-planner

2️⃣ Installer les dépendances
npm install

3️⃣ Lancer le serveur local
npm run dev

API utilisée

L’application communique avec une API REST, par exemple :

GET /api/events

Retourne la liste complète des événements :

[
  { "id": 1, "name": "Soirée Campus", "category": "soirée", "city": "Rennes" },
  { "id": 2, "name": "Festival Étudiant", "category": "festival", "city": "Le Mans" }
]

GET /api/cities
["Rennes", "Le Mans"]

GET /api/stats
{
  "success": true,
  "data": {
    "totalEvents": 26,
    "eventsByCity": { "Rennes": 13, "Le Mans": 13 },
    "eventsByCategory": { "soirée": 10, "concert": 8, "festival": 4, "open-air": 4 }
  }
}