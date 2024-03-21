import { Hotel } from "../model/hotel.model.js";
import { createError } from "../utils/error.js";

export const getAllHotel=async (req,res,next)=>{
    try {
        const hotel=await Hotel.find({})

        res.status(200).send(hotel)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getHotelById=async (req,res,next)=>{
    try {
        const hotel=await Hotel.findById(req.params.id)
        res.status(200).send(hotel)
    } catch (error) {
        next(error)
    }
}

export const updateHotel=async (req,res,next)=>{
    try {
        const updateHotel=await Hotel.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true})
        
        res.status(200).send(updateHotel)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteHotel=async (req,res,next)=>{
    try {
        await Hotel.findByIdAndUpdate(req.params.id)
        res.status(200).send("Deleted successfully")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createHotel=async(req,res,next)=>{
    const newHotel=new Hotel(req.body);

    try {
        const saveHotel= await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}