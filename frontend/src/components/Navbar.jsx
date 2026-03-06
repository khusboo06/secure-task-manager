import { Link, useNavigate } from "react-router-dom"
import { FaTasks } from "react-icons/fa"

export default function Navbar(){

const navigate = useNavigate()

const token = localStorage.getItem("token")

const logout = ()=>{
 localStorage.removeItem("token")
 localStorage.removeItem("role")
 navigate("/")
}

return(

<nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">

<div className="flex justify-between items-center p-3 md:p-5 max-w-7xl mx-auto text-white">

<Link to="/" className="flex items-center gap-2 text-xl font-bold">
<FaTasks className="text-indigo-400"/>
TaskFlow
</Link>

<div className="flex gap-2 md:gap-3">

{!token ? (

<>
<Link
to="/login"
className="border border-white rounded-lg hover:bg-white hover:text-black transition px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base"
>
Login
</Link>

<Link
to="/register"
className="bg-indigo-500 rounded-lg hover:bg-indigo-600 transition px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base"
>
Register
</Link>
</>

) : (

<>
<Link
to="/dashboard"
className="px-4 py-2 border border-indigo-400 rounded-lg hover:bg-indigo-500 transition"
>
Dashboard
</Link>

<button
onClick={logout}
className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
>
Logout
</button>
</>

)}

</div>

</div>

</nav>

)
}


