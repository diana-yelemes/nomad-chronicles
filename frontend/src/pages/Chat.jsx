import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FigureContext } from '../context/FigureContext';
import Title from '../components/Title';

const Chat = () => {
    const { historyfigures } = useContext(FigureContext);
    const { id } = useParams();
    const figure = historyfigures.find(figure => figure._id === id);

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    if (!figure) {
        return <div>Figure not found</div>;
    }

    const handleSend = () => {
        if (input.trim() === '') return;

        // Add user message
        setMessages(prev => [...prev, { sender: 'user', text: input }]);

        // Simulate AI response based on the figure
        const response = getFigureResponse(input);
        setMessages(prev => [...prev, { sender: 'ai', text: response }]);
        
        // Clear input field
        setInput('');
    };

    const getFigureResponse = (userInput) => {
        // Basic AI logic to respond based on user input
        if (userInput.toLowerCase().includes('hello')) {
            return `Hello! I am ${figure.name}. How can I help you today?`;
        }
        if (userInput.toLowerCase().includes('birth year')) {
            return `I was born in ${figure.birthYear}.`;
        }
        if (userInput.toLowerCase().includes('death year')) {
            return `I passed away in ${figure.deathYear}.`;
        }
        if (userInput.toLowerCase().includes('tell me about yourself')) {
            return figure.description;
        }
        return "I'm sorry, I don't understand that.";
    };

    return (
        <div className="flex flex-col h-screen page-container container mx-auto p-4 pt-16">
            <Title title1={'Chat with '} title2={figure.name} title1Styles={'pb-10}'} />

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
