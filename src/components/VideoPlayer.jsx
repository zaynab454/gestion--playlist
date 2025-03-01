// VideoPlayer.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addLike, addDislike } from '../features/videos/videosSlice';
import { FaHeart, FaRegHeart, FaThumbsDown, FaThumbsUp} from 'react-icons/fa';
import { toggleFavorite } from '../features/favorites/favoritesSlice'; // Importer l'action


const VideoPlayer = ({ isDarkMode }) => {
  const video = useSelector((state) => state.videos.selectedVideo);
  const favorites = useSelector((state) => state.favorites.favorites); // Récupérer les favoris
  const dispatch = useDispatch();
  const [userAction, setUserAction] = useState(null);
  const handleLike = () => {
    if (userAction === 'like') {
      dispatch(addLike(-1));
      setUserAction(null);
    } else {
      dispatch(addLike(1));
      if (userAction === 'dislike') {
        dispatch(addDislike(-1));
      }
      setUserAction('like');
    }
  };

  const isFavorite = favorites.some((fav) => fav.id === video.id);

  const handleDislike = () => {
    if (userAction === 'dislike') {
      dispatch(addDislike(-1));
      setUserAction(null);
    } else {
      dispatch(addDislike(1));
      if (userAction === 'like') {
        dispatch(addLike(-1));
      }
      setUserAction('dislike');
    }
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(video));
  };

  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-lg shadow-lg`}>
      {/* Lecteur vidéo */}
      <iframe
        width="100%"
        height="500"
        src={video.lien}
        title={video.titre}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Informations de la vidéo */}
      <div className="mt-4">
  {/* Titre de la vidéo */}
  <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
    {video.titre}
  </h2>

  {/* Description de la vidéo */}
  <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
    {video.description}
  </p>

  {/* Durée et informations de l'auteur */}
  <div className="flex items-center mt-2">
    {/* Durée de la vidéo */}
    <h4 className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
      Durée : {video.duree}
    </h4>

    {/* Informations de l'auteur */}
    <div className="flex items-center ml-auto">
      <img
        src={video.auteur.photo}
        alt={`${video.auteur.prenom} ${video.auteur.nom}`}
        className="w-20 h-20 rounded-full"
      />
      <div className="ml-2">
        {/* Nom de l'auteur */}
        <h3 className={`${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mr-10`}>
          Auteur : {video.auteur.prenom} {video.auteur.nom}
        </h3>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-between items-center mt-4">
  {/* Boutons Like et Dislike */}
  <div className="flex space-x-4">
    {/* Bouton Like */}
    <button
      className={`flex items-center space-x-2 px-4 py-1 rounded hover:bg-opacity-20 ${
        userAction === 'like'
          ? 'bg-transparent text-blue-400'
          : isDarkMode
          ? 'bg-gray-700 text-white'
          : 'bg-gray-200 text-gray-900'
      }`}
      onClick={handleLike}
    >
      <FaThumbsUp size={20} /> {/* Icône Like */}
      <span>{video.likes}</span>
    </button>

    {/* Bouton Dislike */}
    <button
      className={`flex items-center space-x-2 px-4 py-1 rounded hover:bg-opacity-20 ${
        userAction === 'dislike'
          ? 'bg-transparent text-red-400'
          : isDarkMode
          ? 'bg-gray-700 text-white'
          : 'bg-gray-200 text-gray-900'
      }`}
      onClick={handleDislike}
    >
      <FaThumbsDown size={20} /> {/* Icône Dislike */}
      <span>{video.dislikes}</span>
    </button>
      {/* Bouton Favoris */}
  <button
    className={`flex items-center space-x-2 bg-transparent px-4 py-1 rounded hover:bg-opacity-20 ${
      isFavorite ? 'text-red-600' : isDarkMode ? 'text-gray-400' : 'text-gray-700'
    }`}
    onClick={handleToggleFavorite}
  >
    {isFavorite ? <FaHeart size={20} /> : <FaRegHeart size={20} />} {/* Icône Favoris */}
  </button>
  </div>
</div>
    </div>
  );
};

VideoPlayer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // Validation de isDarkMode
};

export default VideoPlayer;