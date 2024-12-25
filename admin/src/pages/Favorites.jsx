import React, { useState, useEffect } from "react";
import { backend_url } from '../config/config';
import axios from "axios";
import { toast } from "react-toastify";

const Favorites = ({ token }) => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backend_url + "/api/figure/favorites",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setFavorites(response.data.favorites);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateStatusHandler = async (e, figureId) => {
    try {
      const response = await axios.post(
        backend_url + "/api/figure/update-status",
        { figureId, learningStatus: e.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchFavorites();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [token]);

  return (
    <div className="px-2 sm:px-8 mt-4 sm:mt-14">
      <div className="flex flex-col gap-4">
        {favorites.map((figure) => (
          <div
            key={figure._id}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start p-3 text-gray-700 bg-white rounded-lg"
          >
            <img
              src={figure.image}
              alt={figure.name}
              className="w-full max-w-[150px] object-cover rounded"
            />
            <div>
              <h3 className="text-lg font-bold">{figure.name}</h3>
              <p>{figure.description}</p>
              <p>
                <span className="font-semibold">Category:</span> {figure.category}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p>
                <span className="font-semibold">Learning Status:</span>
              </p>
              <select
                onChange={(e) => updateStatusHandler(e, figure._id)}
                value={figure.learningStatus}
                className="p-1 ring-1 ring-slate-900/5 rounded bg-primary text-xs font-semibold"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
