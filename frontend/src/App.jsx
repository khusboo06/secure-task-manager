import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"

function App(){

return(

<BrowserRouter>

<Toaster position="top-right"/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

{/* 404 fallback */}
<Route path="*" element={<h1 style={{color:"white",textAlign:"center",marginTop:"100px"}}>404 Page Not Found</h1>} />

</Routes>

</BrowserRouter>

)

}

export default App