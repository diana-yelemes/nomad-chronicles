import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    questions: [{
        questionText: { type: String, required: true },
        options: [{ 
            text: { type: String, required: true },
            isCorrect: { type: Boolean, default: false }
        }],
    }],
    relatedFigureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Figure' },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' }
}, { timestamps: true });

export default mongoose.model('Quiz', QuizSchema);
