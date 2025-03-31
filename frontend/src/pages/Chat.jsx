import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FigureContext } from '../context/FigureContext';
import axios from 'axios';
import Title from '../components/Title';

const Chat = () => {
    const { figures } = useContext(FigureContext);
    const { id } = useParams();
    const figure = figures.find(figure => figure._id === id);

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    if (!figure) {
        return <div>Figure not found</div>;
    }

    const handleSend = async () => {
        if (input.trim() === '') return;
    
        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
    
        try {
            const response = await axios.post("http://127.0.0.1:4000/api/chat", {
                figure_id: figure._id,
                message: input
            });
    
            console.log("API Response:", response.data); // Debugging
    
            if (response.status === 200 && response.data.success) {
                setMessages(prev => [...prev, { sender: 'ai', text: response.data.response }]);
            } else {
                setMessages(prev => [...prev, { sender: 'ai', text: 'Sorry, I could not generate a response.' }]);
            }
        } catch (error) {
            console.error("Chat API Error:", error);
            setMessages(prev => [...prev, { sender: 'ai', text: 'Error contacting AI service.' }]);
        }
    
        setInput('');
    };
    

    return (
        <div className="flex flex-col h-screen page-container container mx-auto p-4 pt-16">
            <Title title1={'Chat with '} title2={figure.name} title1Styles={'pb-10'} />

            <div className="flex-grow border rounded-lg p-4 h-80 overflow-y-auto mb-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block rounded-lg p-2 ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex p-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="border rounded-lg flex-grow p-2 mr-2"
                />
                <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
