import express from "express";
import cors from "cors";
import "dotenv/config";
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import figureRouter from "./routes/figureRoute.js";
import quizRouter from "./routes/quizRoute.js"; // Новый роут
import { chatWithFigure } from './routes/chat.js';

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/figure', figureRouter);
app.use('/api/quiz', quizRouter); // Новый роут для квиза
app.post('/api/chat', chatWithFigure);

app.get('/', (req, res) => {
    res.send('API successfully connected!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
