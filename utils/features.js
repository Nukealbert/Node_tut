import jwt from 'jsonwebtoken'

export const setCookie = (user,res,message,statusCode=200)=>{
    const token =  jwt.sign({_id:user._id},process.env.JWT_SECRET)
    res.status(statusCode).cookie('token', token,{
        httpOnl:true,
        maxAge:15*60*1000,
    }).json({
        success:true,
        message,
    })
}