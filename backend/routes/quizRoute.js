// backend/routes/quizRoute.js
import express from 'express';
import { createQuiz, getQuizByFigure, updateQuiz, deleteQuiz } from '../controllers/quizController.js';

const router = express.Router();

router.post('/', createQuiz);
router.get('/:figureId', getQuizByFigure);
router.put('/:id', updateQuiz);
router.delete('/:id', deleteQuiz);

export default router;