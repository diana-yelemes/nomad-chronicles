import express from "express";
import {
  createFigure,
  deleteFigure,
  getAllFigures,
  getFigureById,
  updateFigure,
} from "../controllers/figureController.js";
import {
    getFiguresBatch
  } from '../controllers/userController.js';
import { protect } from '../middleware/authProfile.js';

import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import Figure from "../models/figureModel.js";

const figureRouter = express.Router();

figureRouter.post("/create", adminAuth, createFigure);
figureRouter.post("/delete", adminAuth, deleteFigure);
figureRouter.post("/single", getFigureById);
figureRouter.get("/list", getAllFigures);
figureRouter.put("/update", adminAuth, updateFigure);
figureRouter.post('/batch', protect, getFiguresBatch);


export default figureRouter;
