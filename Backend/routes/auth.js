import express from "express"
import { UserRegister,UserLogin } from "../controller/auth.js";

const router=express.Router();



router.post('/register',UserRegister)
router.get('/login',UserLogin)


export default router