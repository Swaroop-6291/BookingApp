import { Room } from "../model/room.model.js";
import { Hotel } from "../model/hotel.model.js";

export const createRoom= async (req,res,next)=>{
    const hotelId=req.params.Hotelid;
    const newRoom=new Room(req.body);

    try {
        const savedRoom=await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId,{
                $push:{rooms:savedRoom._id}
            })
        } catch (error) {
            next(error)
        }

        res.status(200).send(savedRoom)
    } catch (error) {
        next(error)
    }

}

export const getAllRoom=async (req,res,next)=>{
    try {
        const room=await Room.find({})

        res.status(200).send(room)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getRoomById=async (req,res,next)=>{
    try {
        const room=await Room.findById(req.params.id)
        res.status(200).send(room)
    } catch (error) {
        next(error)
    }
}

export const updateRoom=async (req,res,next)=>{
    try {
        const updateRoom=await Room.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true})
        
        res.status(200).send(updateRoom)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteRoom=async (req,res,next)=>{
    const hotelID=req.params.HotelId;
    try {
        await Room.findByIdAndUpdate(req.params.id)
        await Hotel.findByIdAndUpdate(hotelID,{$pull:{
            room:req.params.id
        }})
        res.status(200).send("Deleted successfully")
    } catch (error) {
        next(err)
    }
}