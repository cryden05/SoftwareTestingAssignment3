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

---

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


---


## Stopping the Application

docker-compose down

---
