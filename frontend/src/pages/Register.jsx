import { useState } from "react"
import API from "../api/api"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)

const register = async()=>{

 if(!name || !email || !password){
  toast.error("Please fill all fields")
  return
 }

 try{

  setLoading(true)

  await API.post("/auth/register",{
   name,
   email,
   password
  })

  toast.success("Registered successfully")

  navigate("/login")

 }catch{

  toast.error("Registration failed")

 }finally{
  setLoading(false)
 }

}

return(

<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-slate-900">

<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-xl w-96 text-white shadow-xl">

<h2 className="text-2xl font-bold mb-6 text-center">
Create Account
</h2>

<input
className="w-full p-2 mb-3 rounded text-black focus:outline-none"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

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
onClick={register}
disabled={loading}
className="bg-green-500 w-full py-2 rounded hover:bg-green-600 transition"
>
{loading ? "Creating..." : "Register"}
</button>

<p className="text-sm mt-4 text-center">
Already have an account?
<span
onClick={()=>navigate("/login")}
className="text-indigo-400 cursor-pointer ml-1 hover:underline"
>
Login
</span>
</p>

</div>

</div>

)
}