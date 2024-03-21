import { User } from "../model/user.model.js";
import { createError } from "../utils/error.js";

export const getAllUser=async (req,res,next)=>{
    try {
        const user=await User.find({})

        res.status(200).send(hotel)
    } catch (error) {
        next(error)
    }
}

export const getUserById=async (req,res,next)=>{
    try {
        const user=await User.findById(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
}

export const updateUser=async (req,res,next)=>{
    try {
        const updateUser=await User.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true})
        
        res.status(200).send(updateUser)
    } catch (error) {
        next(error)
    }
}

export const deleteUser=async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send("Deleted successfully")
    } catch (error) {
        next(error)
    }
}

/*export const createUser=async(req,res,next)=>{
    const newUser=new User(req.body);

    try {
        const saveUser= await newUser.save()
        res.status(200).json(saveUser)
    } catch (error) {
        next(error)
    }
}*/