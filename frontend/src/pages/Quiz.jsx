import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FigureContext } from '../context/FigureContext';

const Quiz = () => {
    const { figures } = useContext(FigureContext);
    const { id } = useParams();
    const figure = figures.find((figure) => figure._id === id);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({}); // Stores user's answers
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    if (!figure) {
        return <div className="text-center text-red-500">Figure not found!</div>;
    }

    const { quiz } = figure;
    const currentQuestion = quiz[currentQuestionIndex];

    const handleAnswerSelect = (option) => {
        if (!showFeedback) {
            // Save the selected answer
            setSelectedAnswers((prevAnswers) => ({
                ...prevAnswers,
                [currentQuestionIndex]: option,
            }));

            setShowFeedback(true);

            // Update score if the answer is correct
            if (option === currentQuestion.answer) {
                setScore((prevScore) => prevScore + 1);
            }
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setShowFeedback(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
            setShowFeedback(false);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowFeedback(false);
        setScore(0);
        setQuizCompleted(false);
    };

    if (quizCompleted) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
                <p className="text-lg">
                    Your score: {score} / {quiz.length}
                </p>
                <button
                    onClick={resetQuiz}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Restart Quiz
                </button>
            </div>
        );
    }

    // Check if the user has selected an answer for the current question
    const userAnswer = selectedAnswers[currentQuestionIndex];
    const isAnswerCorrect = userAnswer === currentQuestion.answer;

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">{figure.name} Quiz</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <p className="text-lg font-semibold mb-4">
                    {currentQuestion.question}
                </p>
                <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(option)}
                            className={`w-full px-4 py-2 rounded-lg ${
                                userAnswer === option
                                    ? option === currentQuestion.answer
                                        ? "bg-green-500 text-white"
                                        : "bg-red-500 text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            disabled={showFeedback && userAnswer !== undefined}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {showFeedback && userAnswer !== undefined && (
                    <p className="mt-4 text-sm">
                        {isAnswerCorrect
                            ? "Correct! 🎉"
                            : `Incorrect! ❌ The correct answer is: ${currentQuestion.answer}`}
                    </p>
                )}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        {currentQuestionIndex === quiz.length - 1
                            ? "Finish"
                            : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;


