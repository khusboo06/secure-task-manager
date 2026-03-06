import { useState } from "react"
import API from "../api/api"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)

const login = async()=>{

 if(!email || !password){
  toast.error("Please fill all fields")
  return
 }

 try{

  setLoading(true)

  const res = await API.post("/auth/login",{email,password})

  localStorage.setItem("token",res.data.data.token)
  localStorage.setItem("role",res.data.data.role)

  toast.success("Login successful")

  navigate("/dashboard")

 }catch{

  toast.error("Invalid credentials")

 }finally{
  setLoading(false)
 }

}

return(

<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-slate-900">

<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-xl w-96 text-white shadow-xl">

<h2 className="text-2xl font-bold mb-6 text-center">
Login
</h2>

<input
className="w-full p-2 mb-3 rounded text-black focus:outline-none"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="w-full p-2 mb-4 rounded text-black focus:outline-none"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={login}
disabled={loading}
className="bg-indigo-500 w-full py-2 rounded hover:bg-indigo-600 transition"
>
{loading ? "Logging in..." : "Login"}
</button>

<p className="text-sm mt-4 text-center">
Don't have an account?
<span
onClick={()=>navigate("/register")}
className="text-indigo-400 cursor-pointer ml-1 hover:underline"
>
Register
</span>
</p>

</div>

</div>

)
}