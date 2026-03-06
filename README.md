

# Secure REST API with Authentication & Role-Based Access


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

---

# Author

Khushboo Kumari
B.Tech CSE Student

---

This README **accurately describes exactly what you built for the assignment**.

---

If you want, I can also give you a **very short 4-line project description for the email when you submit the assignment**, which makes the submission look more professional.
