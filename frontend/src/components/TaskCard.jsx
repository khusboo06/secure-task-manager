import { FaTrash, FaCheck } from "react-icons/fa"
import { motion } from "framer-motion"

export default function TaskCard({ task, deleteTask, toggleStatus }) {

return(

<motion.div
whileHover={{ scale: 1.05, y: -5 }}
transition={{ type: "spring", stiffness: 200 }}
className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-xl text-white shadow-lg hover:shadow-indigo-500/20"
>

<div className="flex justify-between items-start">

<h3
className={`font-semibold text-lg ${
task.status === "completed" ? "line-through opacity-60" : ""
}`}
>
{task.title}
</h3>

<div className="flex gap-3">

<button
onClick={() => toggleStatus(task._id)}
className="text-green-400 hover:text-green-600 transition"
title="Mark complete"
>
<FaCheck />
</button>

<button
onClick={() => deleteTask(task._id)}
className="text-red-400 hover:text-red-600 transition"
title="Delete task"
>
<FaTrash />
</button>

</div>

</div>

<p className="text-sm opacity-80 mt-2">
{task.description}
</p>

<span
className={`inline-block mt-3 px-3 py-1 text-xs rounded-full font-semibold
${task.status === "completed"
 ? "bg-green-500 text-white"
 : "bg-yellow-400 text-black"}
`}
>

{task.status}

</span>

{task.createdBy?.name && (

<p className="text-xs mt-3 opacity-70">

Created by
<span className="text-indigo-300 ml-1 font-semibold">
{task.createdBy.name}
</span>

</p>

)}

</motion.div>

)
}