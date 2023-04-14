import mongoose from "mongoose";

const schema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    password:{
        type:String,
        select:false,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});
const Task=mongoose.model('Task',schema);


export default User