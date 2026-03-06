Secure REST API with Authentication & Role-Based Access

This project implements a secure REST API with JWT authentication, role-based access control, and CRUD operations, along with a simple React frontend UI to interact with the APIs.



Features
Authentication

User registration

User login

Password hashing using bcrypt

Secure JWT-based authentication

Protected routes using middleware

Role-Based Access Control

The system supports two roles:

User

Create tasks

View their own tasks

Update their own tasks

Delete their own tasks

Admin

View all users' tasks

Update any task

Delete any task

The backend automatically checks role permissions before allowing access to protected APIs.

Task CRUD APIs

Operations supported for tasks:

Create task

Get tasks

Update task

Delete task

Toggle task status (pending / completed)

API Versioning

All APIs are versioned for scalability.

/api/v1/auth
/api/v1/tasks
API Documentation

Swagger documentation is available for testing APIs.

Local Swagger URL:

http://localhost:5000/api-docs

Deployed API Swagger:

https://secure-task-manager-backend.onrender.com/api-docs
Live Deployment

Frontend (Vercel)

https://secure-task-manager.vercel.app

Backend API (Render)

https://secure-task-manager-backend.onrender.com
Tech Stack
Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt

Swagger API Docs

Helmet (Security)

CORS

Frontend

React

TailwindCSS

Axios

React Router

React Hot Toast

Framer Motion

Project Structure
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
Installation
Clone Repository
git clone https://github.com/khusboo06/secure-task-manager.git
cd secure-task-manager
Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

Start backend:

npm start
Frontend Setup
cd frontend
npm install

Create .env file:

VITE_API_URL=http://localhost:5000/api/v1

Run frontend:

npm run dev
Example Role-Based Access

Example user document:

{
 "name": "John",
 "email": "john@test.com",
 "role": "user"
}

Admin example:

{
 "name": "Admin",
 "email": "admin@test.com",
 "role": "admin"
}

Admins can view all tasks, while users can only manage their own tasks.

Security Features

Password hashing using bcrypt

JWT token authentication

Protected API routes

Role-based authorization

Helmet security middleware

CORS protection

