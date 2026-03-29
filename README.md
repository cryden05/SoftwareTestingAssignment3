# Inventory Management System

## Prerequisites

- Docker Desktop

## Run with Docker

From the project root:

```bash
docker compose up --build
```

This starts:
- React frontend
- Node.js backend
- MongoDB

## Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5001
- MongoDB: `mongodb://localhost:27017`

Note:
- The backend container listens on port `5000` internally.
- It is mapped to host port `5001` because port `5000` was already in use on this machine.
- MongoDB is not a webpage, so do not open port `27017` in your browser.

## Local Backend Environment

If you run the backend outside Docker, create `backend/.env` with:

```env
DATABASE_URL=mongodb://127.0.0.1:27017/inventory
JWT_SECRET=your_secret_key
PORT=5000
```

## Stop the Application

```bash
docker compose down
```
