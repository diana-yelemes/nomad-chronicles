import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FigureContext } from '../context/FigureContext';
import Title from '../components/Title';

const Chat = () => {
    const { figures } = useContext(FigureContext);
    const { id } = useParams();
    const figure = figures.find(figure => figure._id === id);

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    if (!figure) {
        return <div>Figure not found</div>;
    }

    const handleSend = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ figure_id: figure._id, message: input })
            });
            
            const data = await response.json();
            if (response.ok) {
                setMessages([...newMessages, { sender: 'ai', text: data.response }]);
            } else {
                setMessages([...newMessages, { sender: 'ai', text: "I'm having trouble responding right now." }]);
            }
        } catch (error) {
            console.error("Error chatting:", error);
            setMessages([...newMessages, { sender: 'ai', text: "Error reaching the server." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen container mx-auto p-4 pt-16">
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
                    disabled={loading}
                />
                <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={loading}>
                    {loading ? 'Loading...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default Chat;
