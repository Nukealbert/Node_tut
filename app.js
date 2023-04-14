import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js'
import {config} from 'dotenv'

config({
    path:'./data/config.env'
})



export const app = express()
//using middleware to process json from request
app.use(express.json())
app.use('/users',userRouter)





