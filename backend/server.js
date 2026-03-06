const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
require("dotenv").config()

const connectDB = require("./config/db")
const swaggerDocs = require("./swagger")

const app = express()

// Connect Database
connectDB()

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))
app.use(helmet())
app.use(express.json())

// Health check route
app.get("/", (req,res)=>{
 res.send("Task Manager API Running")
})

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"))
app.use("/api/v1/tasks", require("./routes/taskRoutes"))

// Swagger Docs
swaggerDocs(app)

// Global error handler
app.use((err,req,res,next)=>{
 console.error(err.stack)
 res.status(500).json({
  success:false,
  message:"Internal Server Error"
 })
})

// Start Server
const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
 console.log(`Server running on port ${PORT}`)
})