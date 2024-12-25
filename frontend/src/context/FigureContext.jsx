import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { historyfigures } from '../assets/data'; // Fallback static data

export const FigureContext = createContext();

const FigureContextProvider = (props) => {
    const currency = '$';
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Backend URL from environment variable
    const [figures, setFigures] = useState([]); // Default to empty array
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // Fetch all historical figures
    const getFiguresData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/figure/list');
            if (response.data.success) {
                setFigures(response.data.figures);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log('Using static data due to fetch error');
            setFigures(historyfigures); // Fallback to static data
        }
    };

    // Authentication: Retrieve token from localStorage if available
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
        getFiguresData();
    }, []);

    const contextValue = {
        figures,
        currency,
        navigate,
        token,
        setToken,
        backendUrl,
    };

    return (
        <FigureContext.Provider value={contextValue}>
            {props.children}
        </FigureContext.Provider>
    );
};

export default FigureContextProvider;
