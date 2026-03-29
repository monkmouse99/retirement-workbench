
# Retirement Workbench

A full-stack application for building and analyzing retirement portfolios, including performance metrics, asset allocation, and scenario modeling.

##  Features

* Create and manage sample portfolios
* Calculate returns and risk metrics
* Visualize asset allocation
* API-driven architecture

##  Tech Stack

* Frontend: Node / React (or your framework)
* Backend: TBD
* Database: (PostgreSQL, MongoDB, etc.)
* DevOps: Docker (optional)

## Project Structure

* `/frontend` – UI application
* `/backend` – API services
* `/database` – schema and migrations
* `/docs` – design decisions and architecture

```text
retirement-workbench/
│
├── docker-compose.yml        # Orchestrates all containers (frontend, backend, db)
├── .env                      # Environment variables for Docker and Node apps
│
├── frontend/                 # Node frontend (React, Express, etc.)
│   ├── Dockerfile            # Builds the frontend container
│   ├── package.json          # Node project manifest
│   ├── package-lock.json     # Locked dependency versions
│   ├── node_modules/         # Installed dependencies (ignored in Git)
│   ├── index.js              # Entry point of frontend app
│   └── other code files      # Components, routes, utils, etc.
│
├── backend/                  # Node backend (Express, API, etc.)
│   ├── Dockerfile            # Builds the backend container
│   ├── package.json          # Node project manifest
│   ├── package-lock.json     # Locked dependency versions
│   ├── node_modules/         # Installed dependencies
│   ├── index.js              # Entry point of backend app
│   ├── routes/               # API route handlers
│   └── controllers/          # Business logic functions
│
└── db/                       # Database data or initialization scripts
    └── ...

volumes/                       # Managed by Docker
node_modules/                  # Linked via Docker volumes for dev hot reload
```

## ⚙️ Getting Started

TBD

### Run locally

docker compose up --build   # forcing rebuild of containers

docker compose up           # start up environment without rebuild

## 🧠 Design Notes

See `/docs` for architecture decisions and planning notes.

## 📌 Roadmap

Tracked via GitHub Projects (Kanban board)

## 🛡️ License

MIT License
