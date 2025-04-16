import express from "express";
import { handleAdminLogin, handleUserLogin, handleUserRegister, getUserProfile } from "../controllers/userController.js";
import { protect } from '../middleware/authProfile.js';
import { updateFavoriteFigures, getFavoriteFigures } from "../controllers/userController.js";

const userRouter = express.Router();

// Routes
userRouter.post('/login', handleUserLogin);
userRouter.post('/register', handleUserRegister);
userRouter.post('/admin', handleAdminLogin);

// Protected route for getting the user's profile
userRouter.get('/profile', protect, getUserProfile);

userRouter.post('/favorites', protect, updateFavoriteFigures);  // Changed from '/favorite'
userRouter.get('/favorites', protect, getFavoriteFigures);     // Changed from '/favorite'
export default userRouter;
