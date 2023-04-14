import jwt from 'jsonwebtoken';
import User from '../models/user.js'

export const isAuthenticated = async (req,res,next)=>{
    const { token }= req.cookies;
   // console.log(token)

    if(!token){
        return res.json({
            success:false,
            message:"User not loged in"
        })
    };
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user=await User.findById(decoded._id);
    next();

}