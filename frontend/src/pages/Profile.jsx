import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError('Please login to view profile');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:4000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Ensure favoriteFigures is always an array
        const data = {
          ...response.data,
          favoriteFigures: response.data.favoriteFigures || []
        };
        
        setProfileData(data);
      } catch (error) {
        console.error('Profile load error:', error);
        setError(error.response?.data?.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="loading-message">Loading profile...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>User Profile</h1>
      </header>

      <div className="user-data">
        {profileData ? (
          <>
            <div className="basic-info">
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
            </div>

            <div className="favorites-section">
              <h3>Favorite Figures</h3>
              {profileData.favoriteFigures.length > 0 ? (
                <ul className="favorites-list">
                  {profileData.favoriteFigures.map(figure => (
                    <li key={figure._id.toString()}> {/* Ensure key is string */}
                      <Link 
                        to={`/biography/${figure._id}`} 
                        className="figure-link"
                      >
                        {figure.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-favorites">No favorite figures yet</p>
              )}
            </div>
          </>
        ) : (
          <p>No profile data available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;