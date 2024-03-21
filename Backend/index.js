import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import Authrouter from "./routes/auth.js";
import HotelRouter from "./routes/hotel.js";
import RoomRouter from "./routes/room.js"
import UserRouter from "./routes/user.js"
import cookieParser from "cookie-parser";

dotenv.config()
const port=process.env.PORT;
const app=express();
app.use(cookieParser())
app.use(express.json())




app.use("/api/v1/auth",Authrouter)
app.use("/api/v1/hotel",HotelRouter)
app.use("/api/v1/room",RoomRouter)
app.use("/api/v1/user",UserRouter)


app.use((err,req,res,next)=>{

    const errStatus=err.status || 500
    const errMessage=err.message || "Something went wrong"

    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack
    })
})



mongoose.connect(`mongodb+srv://swaroop6291:${process.env.MONGO_DB_PASSWORD}@cluster0.vmymi2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log(`Database has been connected`)
    app.listen(port,()=>{
        console.log(`App is port at http://localhost:${port}`);
    })
})
.catch((error)=>{
    console.log(`Some error has occured : ${error}`)
})




