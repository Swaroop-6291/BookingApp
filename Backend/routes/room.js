import express from "express"
import { verifyAdmin } from "../utils/verifyToken.js"
import {createRoom,updateRoom,getAllRoom,getRoomById,deleteRoom} from "../controller/room.js"

const router=express.Router();




router.get('/',getAllRoom)

router.get('/:id',getRoomById);
router.post('/:Hotelid',verifyAdmin,createRoom)

router.put('/:id',verifyAdmin,updateRoom)

router.delete('/:id/:HotelID',verifyAdmin,deleteRoom);

export default router;