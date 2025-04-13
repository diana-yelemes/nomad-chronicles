import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Title from '../components/Title';
import { FigureContext } from '../context/FigureContext';

const Chat = () => {
    const { id } = useParams();
    const { figures } = useContext(FigureContext); 
    const figure = figures.find(figure => figure._id === id);
    const messagesEndRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');



    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading || !figure) return;

        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            console.log("Sending request with figure_id:", figure._id);
            
            const response = await axios.post(
                'http://localhost:4000/api/chat',
                { 
                    figure_id: figure._id, 
                    message: input 
                },
                { 
                    headers: { 'Content-Type': 'application/json' } 
                }
            );

            console.log("Received response:", response.data);

            setMessages(prev => [...prev, {
                sender: 'ai',
                text: response.data.response,
                figureName: response.data.figureName,
                figureImage: response.data.figureImage
            }]);
        } catch (error) {
            console.error("Full error details:", {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
            setMessages(prev => [...prev, {
                sender: 'ai',
                text: error.response?.data?.error || "Error: Please try again",
                isError: true
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    if (!figure) {
        return <div>Loading figure data...</div>;
    }

    return (
        <div className="flex flex-col h-screen page-container container mx-auto p-4 pt-16">
            <Title title1={'Chat with '} title2={figure.name} title1Styles={'pb-10'} />

            <div className="flex-grow border rounded-lg p-4 mb-4 overflow-y-auto bg-gray-50">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-flex max-w-3/4 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            {msg.sender === 'ai' && (
                                <img 
                                    src={msg.figureImage || figure.image} 
                                    alt={msg.figureName || figure.name}
                                    className="w-8 h-8 rounded-full mr-2 mt-1"
                                />
                            )}
                            <div>
                                {msg.sender === 'ai' && (
                                    <div className="font-semibold text-sm text-gray-600">
                                        {msg.figureName || figure.name}
                                    </div>
                                )}
                                <div className={`rounded-lg p-3 ${msg.sender === 'user' 
                                    ? 'bg-blue-500 text-white' 
                                    : msg.isError 
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-gray-200 text-gray-800'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="text-left mb-4">
                        <div className="inline-flex items-center bg-gray-200 rounded-lg p-3">
                            <div className="animate-pulse mr-2">...</div>
                            <span>Thinking</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex p-4 bg-white border-t">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={`Ask ${figure.name} a question...`}
                    className="border rounded-lg flex-grow p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                />
                <button 
                    onClick={handleSend} 
                    disabled={isLoading}
                    className={`px-4 py-2 rounded hover:opacity-90 transition 
                        ${isLoading ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
                >
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default Chat;