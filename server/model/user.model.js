import mongoose from "mongoose";

const userModel=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:false
    },
},
{timestamps: true}
)
const User=mongoose.model("student",userModel)
export default User