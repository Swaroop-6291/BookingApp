import express from "express"
import {getAllUser,getUserById,deleteUser,updateUser} from "../controller/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router=express.Router();

/*router.get('/check',verifyToken,(req,res,next)=>{
    return res.status(200).send("Hello you are authenticated")
 })
 router.get('/checkUser/:id',verifyUser,(req,res,next)=>{
    return res.status(200).send("Hello you are authenticated and you can delete")
 })
 router.get('/checkAdmin',verifyAdmin,(req,res,next)=>{
    return res.status(200).send("Hello you are authenticated and you can delete")
 })*/

router.get('/:id',verifyUser,getUserById)


router.get('/',verifyUser,getAllUser)



//router.post('/register',createUser)

router.put('/update/:id',verifyUser,updateUser)

router.delete('/delete/:id',verifyAdmin,deleteUser)


export default router;