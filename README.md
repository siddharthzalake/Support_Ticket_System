# 🚀 Support Ticket System (MERN Stack)

## 📌 Overview

This project is a full-stack Support Ticket System that allows merchants to create, view, and manage support inquiries.

The application follows a modular and scalable architecture using the MERN stack.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router
* Context API (State Management)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 🧱 Architecture

### 🔹 Backend (MVC Pattern)

* **Models**: Define ticket schema using Mongoose
* **Controllers**: Handle business logic
* **Routes**: API endpoints for ticket operations

### 🔹 Frontend (Modular Architecture)

* **Components**: Reusable UI components (Cards, Modal, Layout)
* **Pages**: Dashboard page
* **Context API**: Global state management for tickets
* **Services Layer**: Handles API calls

---

## ⚙️ Features

* Create new support tickets
* View all tickets
* Update ticket status (NEW, INVESTIGATING, RESOLVED)
* Search tickets
* Dashboard with statistics
* Responsive UI with Tailwind CSS

---

## ▶️ How to Run the Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/support-ticket-system.git
cd support-ticket-system
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

* `POST /api/tickets` → Create ticket
* `GET /api/tickets` → Get all tickets
* `PATCH /api/tickets/:id` → Update ticket status

---

## 📈 Future Improvements

* Authentication (JWT-based login system)
* Role-based access (Admin/User)
* Pagination and advanced filtering
* Real-time updates (WebSockets)

---


