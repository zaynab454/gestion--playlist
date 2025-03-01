// VideoList.js
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectVideo } from '../features/videos/videosSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const VideoList = ({ isDarkMode }) => {
  const videos = useSelector((state) => state.videos.videos);
  const favorites = useSelector((state) => state.favorites.favorites); // Récupérer les favoris
  const dispatch = useDispatch();
  

  if (!Array.isArray(videos) || videos.length === 0) {
    return <div className="text-gray-400">Aucune vidéo disponible.</div>;
  }

  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className={`${bgColor} ${textColor} p-4 rounded-lg shadow-lg`}>
      {videos.map((video) => {
        const isFavorite = favorites.some((fav) => fav.id === video.id); // Vérifier si la vidéo est favorite
        return (
          <div
            key={video.id}
            className={`mb-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'} p-2 rounded-lg`}
            onClick={() => dispatch(selectVideo(video))}
          >
            <img
              src={video.miniature}
              alt={video.titre}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
                        {/* Bouton Favoris */}
                        <button
              className={`flex items-center justify-center w-full mt-2 p-2 rounded-lg ${
                isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-400'
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Empêche la propagation de l'événement au parent
                dispatch(toggleFavorite(video)); // Basculer les favoris
              }}
            >
              {isFavorite ? (
                <FaHeart className="text-red-600" size={20} /> // Cœur rempli si favori
              ) : (
                <FaRegHeart className={isDarkMode ? 'text-gray-400' : 'text-gray-700'} size={20} /> // Cœur vide sinon
              )}
            </button>
            <div className="mt-2 text-center">
              <h5 className={`${textColor} font-semibold`}>{video.titre}</h5>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-sm`}>{video.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

VideoList.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // Validation de isDarkMode
};

export default VideoList;