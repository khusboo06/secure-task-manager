import { motion } from "framer-motion"

export default function FeatureCard({ icon, title, desc }) {

 return (

<motion.div
 whileHover={{ scale: 1.06, y: -5 }}
 transition={{ type: "spring", stiffness: 200 }}
 className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl text-white shadow-lg transition hover:shadow-indigo-500/30 hover:border-indigo-400"
>

<div className="text-4xl text-indigo-300 mb-4">
 {icon}
</div>

<h3 className="font-semibold text-lg mb-2">
 {title}
</h3>

<p className="text-sm opacity-80">
 {desc}
</p>

</motion.div>

 )
}