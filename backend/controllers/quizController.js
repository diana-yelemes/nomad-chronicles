// backend/controllers/quizController.js
import Quiz from '../models/Quiz.js';

// Create a new quiz
export const createQuiz = async (req, res) => {
    try {
        const { title, description, questions, relatedFigureId, difficulty } = req.body;
        const newQuiz = new Quiz({ title, description, questions, relatedFigureId, difficulty });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get quiz by figure ID
export const getQuizByFigure = async (req, res) => {
    try {
        console.log("Figure ID from params:", req.params.figureId);
        const quiz = await Quiz.findOne({ relatedFigureId: req.params.figureId });
        
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update quiz by ID
export const updateQuiz = async (req, res) => {
    try {
        const { title, description, questions, difficulty } = req.body;
        const updatedQuiz = await Quiz.findByIdAndUpdate(
            req.params.id,
            { title, description, questions, difficulty },
            { new: true }
        );
        if (!updatedQuiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json(updatedQuiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete quiz by ID
export const deleteQuiz = async (req, res) => {
    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!deletedQuiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json({ message: 'Quiz deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
