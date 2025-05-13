import { GenerateToken } from "../../lib/jsonwentoken.js";
import User from "../../model/user.model.js";

export const Signup=async(req,res)=>{
 try {
    const {name,email,password}=req.body
    if(!name ||!email||!password){
        return res.status(403).json({success:false,message:"Please fill all the inputs"})
    }
    const existingemail=await User.findOne({email})
    if(existingemail){
        return res.status(403).json({success:false,message:"email already existed"})
    }

    const newUser=new User({
        name,
        email,
        password,
    })
   const token= GenerateToken(newUser._id,res)
     await newUser.save()
     return res.status(200).json({success:true,message:"user signup successfully",newUser,token})
 } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Internal server error"})
 }
}
export const Login=async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)
    try {
        if(!email||!password){
            return res.status(403).json({success:false,messgae:"fill all the fields or invalid token"})
        }
       const existinguser=await User.findOne({email})
       if (!existinguser) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    if(password!==existinguser.password){
        return res.status(403).json({success:false,message:"invalid password"})
    }
        if(existinguser){
          const token=  GenerateToken(existinguser._id,res)
            return res.status(200).json({success:true,message:"Logged in",existinguser,token})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,messgae:"internal server error"})
    }
}