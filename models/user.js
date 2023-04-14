import mongoose from "mongoose";

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        required:true,
        type:String,
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});
const User=mongoose.model('user',schema);


export default User