const roleMiddleware = (...allowedRoles)=>{

 return (req,res,next)=>{

  try{

   if(!req.user){

    return res.status(401).json({
     success:false,
     message:"Unauthorized access"
    })

   }

   if(!allowedRoles.includes(req.user.role)){

    return res.status(403).json({
     success:false,
     message:`Access denied for role: ${req.user.role}`
    })

   }

   next()

  }catch(error){

   console.error("Role Middleware Error:",error.message)

   return res.status(500).json({
    success:false,
    message:"Role authorization failed"
   })

  }

 }

}

module.exports = roleMiddleware