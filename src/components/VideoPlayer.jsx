import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLike, addDislike } from '../features/videos/videosSlice';

const VideoPlayer = () => {
  const video = useSelector((state) => state.videos.selectedVideo);
  const dispatch = useDispatch();
  const [userAction, setUserAction] = useState(null); // 'like', 'dislike', ou null

  const handleLike = () => {
    if (userAction === 'like') {
      // Si l'utilisateur a déjà liké, on retire son like
      dispatch(addLike(-1));
      setUserAction(null);
    } else {
      // Sinon, on ajoute un like
      dispatch(addLike(1));
      if (userAction === 'dislike') {
        // Si l'utilisateur avait précédemment disliké, on retire le dislike
        dispatch(addDislike(-1));
      }
      setUserAction('like');
    }
  };

  const handleDislike = () => {
    if (userAction === 'dislike') {
      // Si l'utilisateur a déjà disliké, on retire son dislike
      dispatch(addDislike(-1));
      setUserAction(null);
    } else {
      // Sinon, on ajoute un dislike
      dispatch(addDislike(1));
      if (userAction === 'like') {
        // Si l'utilisateur avait précédemment liké, on retire le like
        dispatch(addLike(-1));
      }
      setUserAction('dislike');
    }
  };

  return (
    <div>
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
  <h2 className="text-xl font-bold">{video.titre}</h2>
  
  {/* Description de la vidéo */}
  <p className="text-gray-400 mt-2">{video.description}</p>

  {/* Conteneur pour la durée et les informations de l'auteur */}
  <div className="flex items-center mt-2">
    {/* Durée de la vidéo */}
    <h4 className="text-gray-400">Durée : {video.duree}</h4>

    {/* Informations de l'auteur */}
    <div className="flex items-center ml-auto">
      <img
        src={video.auteur.photo}
        alt={`${video.auteur.prenom} ${video.auteur.nom}`}
        className="w-20 h-20 rounded-full"
      />
      <div className="ml-2">
        <h3 className="text-gray-200 mr-10">
          Auteur : {video.auteur.prenom} {video.auteur.nom}
        </h3>
      </div>
    </div>
  </div>
</div>

      {/* Boutons Like et Dislike */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          {/* Bouton Like */}
          <button
            className={`bg-transparent text-white px-4 py-1 rounded hover:bg-gray-600 ${
              userAction === 'like' ? 'bg-blue-800' : ''
            }`}
            onClick={handleLike}
          >
            👍 {video.likes}
          </button>

          {/* Bouton Dislike */}
          <button
            className={`bg-transparent text-white px-4 py-1 rounded hover:bg-gray-600 ${
              userAction === 'dislike' ? 'bg-red-500' : ''
            }`}
            onClick={handleDislike}
          >
            👎 {video.dislikes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;