import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { setCookie } from '../utils/features.js';

export const findAlluser= async (req, res)=>{
  
 }

 export const createUser= async(req, res)=>{

    const {name, email,password}=req.body
    let user= await User.findOne({email});
    //console.log(user._id)
    if(user) return res.status(404).json({
        success:false, message:"User Already Exist"
    });
    const hashedPassword= await bcrypt.hash(password,10)
    user=await User.create({name, email, password:hashedPassword})
    setCookie(user,res,"Registered Successully",201)

}

export const loginUser= async(req, res, next)=>{

    const {email, password} = req.body
    const user= await User.findOne({email}).select("+password")
    if(!user) return res.status(404).json({
        success:false,
        message:"Invalid user or password "
    });
    const isMatch= await bcrypt.compare(password,user.password)
    if(!isMatch) return res.status(404).json({
        success:false,
        message:"Invalid user or password "
    });

    setCookie(user,res,`Welcome Back ${user.name}`,200)

}

export const getUserDetails = async (req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user,
    })
}

export const logOut = (req,res)=>{
    res.status(200).cookie('token','',{
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"Logout Succefully "
    })
}


  