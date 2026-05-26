import mongoose from "mongoose";
import User from '../models/users.models.js'

export const connectDB = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URI).then (() => {
        console.log("database connected")
        
    })
    }
    catch(error){
   console.error(error)
   process.exit(1)
    }
}