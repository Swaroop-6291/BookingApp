import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const UserRegister=async(req,res,next)=>{
    
    
    try {
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt)
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        const user=await newUser.save();

        res.status(200).json({
            success:true,
            message:"Created Successfully",
            data:user
        })
    } catch (error) {
        next(error)
    }
}

export const UserLogin=async(req,res,next)=>{
    
    
    try {
        const user=await User.findOne({username:req.body.username})
        if(!user)return next(createError(404,"User not exist"))
        const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)
        
        if(!isPasswordCorrect)return next(createError(400,"Incorrect Password"))
        
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT);


        const {password,isAdmin,...otherDetails}=user._doc

        return res.cookie("access_token",token,{httpOnly:true}).status(200).json({
            success:true,
            message:"Login Successfully",
            data:otherDetails
        })

    } catch (error) {
        next(error)
    }
}