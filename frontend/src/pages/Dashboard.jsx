import { useState,useEffect } from "react"
import API from "../api/api"
import TaskCard from "../components/TaskCard"
import { FaPlus } from "react-icons/fa"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Dashboard(){

const navigate = useNavigate()

const [tasks,setTasks] = useState([])
const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [loading,setLoading] = useState(false)
const role = localStorage.getItem("role")
const loadTasks = async()=>{
 try{
  const res = await API.get("/tasks")
  setTasks(res.data.data)
 }catch{
  toast.error("Failed to load tasks")
 }
}

useEffect(()=>{
 loadTasks()
},[])


const addTask = async()=>{

 if(!title){
  toast.error("Task title required")
  return
 }

 try{

  setLoading(true)

  await API.post("/tasks",{title,description})

  toast.success("Task added")

  setTitle("")
  setDescription("")

  loadTasks()

 }catch{
  toast.error("Task creation failed")
 }finally{
  setLoading(false)
 }

}


const deleteTask = async(id)=>{

 try{

  await API.delete(`/tasks/${id}`)

  toast.success("Task deleted")

  loadTasks()

 }catch{
  toast.error("Delete failed")
 }

}


const toggleStatus = async(id)=>{

 try{

  await API.patch(`/tasks/${id}/status`)

  toast.success("Task updated")

  loadTasks()

 }catch{

  toast.error("Update failed")

 }

}


const logout = ()=>{
 localStorage.removeItem("token")
 localStorage.removeItem("role")
 navigate("/")
}



return(

<div className="min-h-screen bg-gradient-to-br from-indigo-600 to-slate-900 p-6">

<div className="max-w-6xl mx-auto">

<div className="flex justify-between items-center mb-6">

<h1 className="text-3xl text-white font-bold">
Dashboard ({role})
</h1>

<button
onClick={logout}
className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition"
>
Logout
</button>

</div>


<div className="mb-6 flex gap-3 flex-wrap">

<input
className="p-2 rounded bg-white/80 focus:outline-none"
placeholder="Task title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
className="p-2 rounded bg-white/80 focus:outline-none"
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<button
disabled={loading}
onClick={addTask}
className="bg-green-500 px-4 py-2 rounded text-white flex items-center gap-2 hover:bg-green-600 transition"
>
<FaPlus/> {loading ? "Adding..." : "Add Task"}
</button>

</div>


{tasks.length === 0 ? (

<p className="text-white opacity-70 text-center mt-10">
No tasks yet. Create your first task 🚀
</p>

) : (

<div className="grid md:grid-cols-3 gap-6">

{tasks.map(task=>(
<TaskCard
key={task._id}
task={task}
deleteTask={deleteTask}
toggleStatus={toggleStatus}
/>
))}

</div>

)}

</div>

</div>

)
}