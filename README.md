# Inventory Management System

This application is a full-stack Inventory Management System (IMS) designed for ABC E-Commerce Ltd. It provides a robust solution for managing inventory, handling transactions, and generating reports.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Testing](#testing)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

## Introduction

ABC E-Commerce Ltd. required a more efficient inventory management system to handle their growing volume of transactions and products. This application addresses the challenges of inaccurate inventory tracking, delays in stock replenishment, high operational costs, and difficulty in managing multi-warehouse operations.

## Features

- **User Roles:** Admin, Manager, and Staff with role-based access control.
- **Product Management:** Add, update, and delete products.
- **Warehouse Management:** Manage multiple warehouses and assign managers.
- **Transaction Tracking:** Record stock in and out transactions.
- **Reporting:** Generate inventory reports.
- **Real-time Inventory Tracking:** Updates inventory levels with each transaction.
- **User Authentication:** Secure login and session management using JWT.

## Technologies

- **Frontend:**
  - React.js
  - Axios (for API requests)
  - React Router (for navigation)
  - JWT Decode (for token decoding)
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (for MongoDB object modeling)
  - JSON Web Tokens (JWT) (for authentication)
  - Bcryptjs (for password hashing)
  - Cors (for cross-origin resource sharing)
  - Dotenv (for environment variables)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd InventoryManagementSystem
   
### 2. Start the application using Docker
docker-compose up --build

This will:
- Start the Node.js backend
- Start the MongoDB container
- Connect both services automatically

---

### 3. Access the application

Backend API:
http://localhost:3000

MongoDB:
mongodb://mongo:27017/testdb

---

## Environment Variables

Create a `.env` file inside the backend folder if needed:

MONGO_URI=mongodb://mongo:27017/testdb
PORT=3000

Note:
Inside Docker, the MongoDB host MUST be "mongo" (not localhost).

---

## API Endpoints

GET    /              → Health check  
GET    /api/products  → Get all products  
POST   /api/products  → Add a product  
GET    /api/users     → Get all users  
POST   /auth/login    → User login  

---

## Stopping the Application

docker-compose down

---
