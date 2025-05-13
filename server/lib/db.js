import mongoose from "mongoose";
import dotenv from 'dotenv'

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB)
        console.log("DB connected successfully")
    }catch(error){
      console.log(error);
    }
}

export default  connectDB