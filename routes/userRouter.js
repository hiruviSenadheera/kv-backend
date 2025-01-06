import express from 'express'
import { loginUser, registerUser } from '../controllers/userControllers.js'

const userRouter = express.Router()

userRouter.post("/",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;
