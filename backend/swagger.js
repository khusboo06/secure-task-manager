const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
 definition: {
  openapi: "3.0.0",
  info: {
   title: "Secure Task Manager API",
   version: "1.0.0",
   description: "Scalable REST API with JWT Authentication and Role-Based Access Control"
  },

  servers: [
   {
    url: "http://localhost:5000",
    description: "Local Development Server"
   }
  ],

  components: {
   securitySchemes: {
    bearerAuth: {
     type: "http",
     scheme: "bearer",
     bearerFormat: "JWT"
    }
   }
  },

  security: [
   {
    bearerAuth: []
   }
  ]

 },

 apis: ["./routes/*.js"]
}

const swaggerSpec = swaggerJsDoc(options)

module.exports = (app)=>{
 app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}