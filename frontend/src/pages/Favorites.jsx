import React, { useState, useEffect, useContext } from 'react';
import { FigureContext } from '../contexts/FigureContext';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavoritesPage = () => {
    const { token } = useContext(FigureContext);
    const [favoriteFigures, setFavoriteFigures] = useState([]);

    useEffect(() => {
        if (token) {
            fetchFavoriteFigures();
        }
    }, [token]);

    // Fetch favorite figures from the backend
    const fetchFavoriteFigures = async () => {
        try {
            const res = await axios.get('/api/user/favorite', {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.data && Array.isArray(res.data.favoriteFigures)) {
                setFavoriteFigures(res.data.favoriteFigures);
            } else {
                console.warn("No favoriteFigures array in response", res.data);
            }
        } catch (err) {
            console.error('Error fetching favorites:', err);
        }
    };

    // Toggle favorite status
    const toggleFavorite = async (figureId) => {
        try {
            const response = await axios.post(
                '/api/user/favorite',
                { figureId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Favorite status updated', response.data);

            // Re-fetch favorite figures after update to keep them synced
            fetchFavoriteFigures();
        } catch (error) {
            console.error('Error updating favorite status:', error);
        }
    };

    return (
        <div>
            <h2>Your Favorite Figures</h2>
            <div className="favorites-list">
                {favoriteFigures.map((figure) => (
                    <div key={figure._id} className="relative">
                        {/* Favorite icon */}
                        <button
                            onClick={() => toggleFavorite(figure._id)}
                            className="absolute top-3 right-3 z-10 text-red-500 text-xl"
                            title="Toggle favorite"
                        >
                            <FaHeart />
                        </button>

                        {/* Figure card */}
                        <div className='flexCenter bg-primary p-6 rounded-3xl overflow-hidden relative group'>
                            <img
                                src={figure.image}
                                alt={figure.name}
                                className='aspect-[3/4] overflow-hidden object-cover shadow-xl shadow-slate-900/30 rounded-lg cursor-pointer'
                            />
                        </div>

                        <div className='p-3'>
                            <div className='flexBetween'>
                                <h4 className='h4 line-clamp-1 !my-0'>{figure.name}</h4>
                            </div>
                            <div className='flexBetween pt-1'>
                                <p className='font-bold capitalize'>{figure.category}</p>
                            </div>
                            <p className='line-clamp-2 py-1'>{figure.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
