import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';

const Item = ({ figure }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!token) return;

      try {
        const res = await axios.get('http://localhost:4000/api/user/favorites', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setIsFavorite(res.data.favoriteFigures.includes(figure._id));
      } catch (err) {
        console.error('Error fetching favorites:', err);
      }
    };

    fetchFavorites();
  }, [figure._id, token]);

  const toggleFavorite = async () => {
    if (!token || loading) return;

    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:4000/api/user/favorites',
        { figureId: figure._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setIsFavorite(!isFavorite);
      console.log('Favorite updated:', response.data);
    } catch (error) {
      console.error('Error updating favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {token && (
        <button
          onClick={toggleFavorite}
          disabled={loading}
          className="absolute top-3 right-3 z-10 text-red-500 text-xl"
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      )}

      {/* 💬 Original UI restored below */}
      <div className='flexCenter bg-rpimary p-6 rounded-3xl overflow-hidden relative group'>
        <Link to={`/biography/${figure._id}`}>
          <img
            src={figure.image}
            alt='figImg'
            className='aspect-[3/4] overflow-hidden object-cover shadow-xl shadow-slate-900/30 rounded-lg cursor-pointer'
          />
        </Link>
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
  );
};

export default Item;
