import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
    const { id } = useParams(); // Получаем ID фигуры из URL
    const [quiz, setQuiz] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // Получаем квиз с бэкенда
    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/quiz/${id}`);
                console.log("Quiz data:", response.data); // Лог для отладки
                setQuiz(response.data);
            } catch (error) {
                console.error("Error fetching quiz:", error);
            }
        };
        fetchQuiz();
    }, [id]);

    // Проверка на пустые данные
    if (!quiz) {
        return <div className="text-center text-red-500">Loading...</div>;
    }

    if (!quiz.questions || quiz.questions.length === 0) {
        return <div className="text-center text-red-500">No quiz data available.</div>;
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];

    // Функция обработки выбранного ответа
    const handleAnswerSelect = (option) => {
        if (!showFeedback) {
            setSelectedAnswers((prev) => ({
                ...prev,
                [currentQuestionIndex]: option,
            }));

            setShowFeedback(true);

            // Проверяем правильность ответа
            if (option.isCorrect) {
                setScore((prev) => prev + 1);
            }
        }
    };

    // Переход к следующему вопросу
    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setShowFeedback(false);
        } else {
            setQuizCompleted(true);
        }
    };

    // Переход к предыдущему вопросу
    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
            setShowFeedback(false);
        }
    };

    // Сброс квиза
    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowFeedback(false);
        setScore(0);
        setQuizCompleted(false);
    };

    // Если квиз завершен
    if (quizCompleted) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
                <p className="text-lg">
                    Your score: {score} / {quiz.questions.length}
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

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <p className="text-lg font-semibold mb-4">
                    {currentQuestion.questionText}
                </p>
                <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(option)}
                            className={`w-full px-4 py-2 rounded-lg ${
                                selectedAnswers[currentQuestionIndex] === option
                                    ? option.isCorrect
                                        ? "bg-green-500 text-white"
                                        : "bg-red-500 text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            disabled={showFeedback}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
                {showFeedback && (
                    <p className="mt-4 text-sm">
                        {selectedAnswers[currentQuestionIndex]?.isCorrect
                            ? "Correct! 🎉"
                            : "Incorrect! ❌"}
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
                        {currentQuestionIndex === quiz.questions.length - 1
                            ? "Finish"
                            : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
