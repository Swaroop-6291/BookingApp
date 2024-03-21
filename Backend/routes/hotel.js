import express from "express"
import { createHotel,getAllHotel,getHotelById,updateHotel,deleteHotel } from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router=express.Router();


router.get('/:id',verifyAdmin,getHotelById)

router.get('/',getAllHotel)



router.post('/register',verifyAdmin,createHotel)

router.put('/update/:id',verifyAdmin,updateHotel)

router.delete('/delete/:id',verifyAdmin,deleteHotel)


export default router;