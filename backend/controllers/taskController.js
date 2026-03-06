const Task = require("../models/Task")



exports.createTask = async (req,res)=>{

 try{

  const {title,description} = req.body

  const task = await Task.create({
   title,
   description,
   createdBy:req.user._id
  })

  res.status(201).json({
   success:true,
   data:task
  })

 }catch(error){

  res.status(500).json({message:error.message})

 }

}



exports.getTasks = async (req,res)=>{

 try{

  let tasks

  if(req.user.role === "admin"){

   tasks = await Task.find().populate("createdBy","name email")

  }else{

   tasks = await Task.find({createdBy:req.user._id})

  }

  res.status(200).json({
   success:true,
   count:tasks.length,
   data:tasks
  })

 }catch(error){

  res.status(500).json({message:error.message})

 }

}



exports.updateTask = async (req,res)=>{

 try{

  let task

  if(req.user.role === "admin"){

   task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
   )

  }else{

   task = await Task.findOneAndUpdate(
    {_id:req.params.id,createdBy:req.user._id},
    req.body,
    {new:true}
   )

  }

  if(!task){
   return res.status(404).json({message:"Task not found"})
  }

  res.json({
   success:true,
   data:task
  })

 }catch(error){

  res.status(500).json({message:error.message})

 }

}



exports.deleteTask = async (req,res)=>{

 try{

  let task

  if(req.user.role === "admin"){

   // admin can delete any task
   task = await Task.findByIdAndDelete(req.params.id)

  }else{

   // user can delete only their own task
   task = await Task.findOneAndDelete({
    _id:req.params.id,
    createdBy:req.user._id
   })

  }

  if(!task){
   return res.status(404).json({
    success:false,
    message:"Task not found"
   })
  }

  res.json({
   success:true,
   message:"Task deleted"
  })

 }catch(error){

  res.status(500).json({
   success:false,
   message:error.message
  })

 }

}



exports.toggleTaskStatus = async(req,res)=>{

 try{

  const task = await Task.findById(req.params.id)

  if(!task){
   return res.status(404).json({message:"Task not found"})
  }

  task.status = task.status === "pending"
  ? "completed"
  : "pending"

  await task.save()

  res.json({
   success:true,
   data:task
  })

 }catch(error){

  res.status(500).json({message:error.message})

 }

}