import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeatureCard"
import { FaTasks, FaLock, FaRocket } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home(){

return(

<div className="min-h-screen bg-gradient-to-br from-indigo-600 to-slate-900 text-white">

<Navbar/>

{/* Hero Section */}
<div className="text-center mt-28 px-6 max-w-4xl mx-auto">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-5xl md:text-6xl font-bold leading-tight"
>

Manage Your Tasks Smarter

</motion.h1>

<p className="mt-6 text-lg opacity-80 max-w-2xl mx-auto">
A secure and scalable task management platform with JWT authentication and modern UI.
</p>

<div className="mt-10 flex justify-center gap-4 flex-wrap">

<Link
to="/register"
className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 transition shadow-lg hover:shadow-indigo-500/40"
>
Get Started
</Link>

<Link
to="/login"
className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
>
Login
</Link>

</div>

</div>


{/* Features Section */}
<div className="mt-28">

<h2 className="text-center text-3xl font-semibold mb-10">
Core Features
</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 pb-20">

<FeatureCard
icon={<FaTasks/>}
title="Task Management"
desc="Create, update, and manage tasks easily through a clean dashboard interface."
/>

<FeatureCard
icon={<FaLock/>}
title="Secure Authentication"
desc="JWT-based authentication with role-based access control for secure APIs."
/>

<FeatureCard
icon={<FaRocket/>}
title="Scalable Backend"
desc="Built with Node.js, Express, and MongoDB following scalable API architecture."
/>

</div>

</div>

</div>

)
}