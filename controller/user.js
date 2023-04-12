import User from "../models/user.js"

export const findAlluser= async (req, res)=>{
    let users= await User.find({})//It will return all the users present in database
    //console.log(users)
    console.log(req.query)
     res.json({
         success:true,
         users:users
     })
 }

 export const createUser= async(req, res)=>{
 
    const { name, email, password }= req.body
    
     await User.create({
        name,
        email,
        password
    })
    res.json({
        success:true,
        message:"Registered Successfully"
    })

}


  