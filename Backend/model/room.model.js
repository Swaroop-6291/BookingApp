import mongoose from "mongoose";


const roomSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:[{number:Number,unAvailableDates:{type:[Date]}}]
    
},{timestamps:true})

/*[
    {number:101,unAvailableDates:[]},
    {number:102,unAvailableDates:[]},
    {number:103,unAvailableDates:[]},
    {number:104,unAvailableDates:[]},
    {number:105,unAvailableDates:[]}
]*/

export const Room =mongoose.model("Room",roomSchema)