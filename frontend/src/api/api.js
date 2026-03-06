import axios from "axios"

const API = axios.create({
 baseURL: "http://localhost:5000/api/v1",
 timeout: 10000
})

// Attach JWT token
API.interceptors.request.use((req) => {

 const token = localStorage.getItem("token")

 if (token) {
  req.headers.Authorization = `Bearer ${token}`
 }

 return req

})


// Handle errors globally
API.interceptors.response.use(
 (response) => response,
 (error) => {

  if (error.response?.status === 401) {
   localStorage.removeItem("token")
   localStorage.removeItem("role")
   window.location = "/login"
  }

  return Promise.reject(error.response?.data?.message || error.message)
 }
)

export default API