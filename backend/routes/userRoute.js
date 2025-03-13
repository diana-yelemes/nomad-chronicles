import express from "express"
import { handleAdminLogin, handleUserLogin, handleUserRegister } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post('/login', handleUserLogin)
userRouter.post('/register', handleUserRegister)
userRouter.post('/admin', handleAdminLogin)

export default userRouter