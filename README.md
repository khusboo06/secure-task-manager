

# Secure REST API with Authentication & Role-Based Access

This project implements a secure REST API with JWT authentication, role-based access control, and CRUD operations, along with a simple React frontend UI to interact with the APIs.


# Features

### Authentication

* User registration
* User login
* Password hashing using **bcrypt**
* JWT-based authentication

### Role-Based Access

Two roles are supported:

**User**

* Can create tasks
* Can view their tasks
* Can update their tasks
* Can delete their tasks

**Admin**

* Can view all tasks
* Can manage any task

---

### CRUD APIs

CRUD operations for tasks:

* Create task
* Get tasks
* Update task
* Delete task
* Toggle task status

---

# API Versioning

```text
/api/v1/auth
/api/v1/tasks
```

---

# API Documentation

Swagger documentation available at:

```text
http://localhost:5000/api-docs
```

---

# Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Swagger
* Helmet
* CORS

### Frontend

* React
* TailwindCSS
* Axios
* React Router
* React Hot Toast
* Framer Motion

---

# Project Structure

```
secure-task-manager
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│
└── README.md
```

---

# Setup

## Backend

```
cd backend
npm install
npm start
```

---

## Frontend

```
cd frontend
npm install
npm run dev
```




