import React, { useState } from 'react';
import { FaYoutube, FaSearch, FaHome, FaFire, FaUserFriends, FaHistory, FaList, FaPlayCircle, FaClock, FaThumbsUp, FaDownload, FaMoon, FaSun } from 'react-icons/fa';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import CommentGrid from './CommentGrid';

const Dashboard = () => {
  // État pour gérer les vidéos favorites
  const [favorites, setFavorites] = useState([]);

  // État pour gérer le mode sombre ou clair
  const [isDarkMode, setIsDarkMode] = useState(true); // Par défaut en mode sombre

  // Fonction pour basculer entre le mode sombre et clair
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Fonction pour ajouter ou retirer une vidéo des favoris
  const toggleFavorite = (video) => {
    if (favorites.some((fav) => fav.id === video.id)) {
      // Si la vidéo est déjà dans les favoris, on la retire
      setFavorites(favorites.filter((fav) => fav.id !== video.id));
    } else {
      // Sinon, on l'ajoute aux favoris
      setFavorites([...favorites, video]);
    }
  };

  // Styles dynamiques en fonction du mode
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const sidebarBgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const inputBgColor = isDarkMode ? 'bg-gray-700' : 'bg-gray-200';
  const hoverBgColor = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200';

  return (
    <div className={`w-screen min-h-screen ${bgColor} ${textColor}`}>
      {/* Header */}
      <nav className={`${sidebarBgColor} shadow-md py-4 px-6 flex justify-between items-center`}>
        {/* Logo à gauche */}
        <div className="text-2xl font-bold flex-shrink-0 flex items-center space-x-2">
          <FaYoutube className="text-red-600 h-20 w-auto ml-10" /> {/* Icône YouTube */}
          <h1>YouTube</h1> {/* Titre "YouTube" */}
        </div>

        {/* Input et bouton à droite avec espace */}
        <div className="flex items-center space-x-6 flex-shrink-0">
                    {/* Bouton pour basculer le thème avec icône */}
                    <button
            onClick={toggleTheme}
            className={`${isDarkMode ? 'bg-transparent' : 'bg-transparent'} text-white px-4 py-2 rounded-lg hover:${isDarkMode ? 'bg-transparent' : 'bg-transparent'} flex items-center space-x-2`}
          >
            {isDarkMode ? (
              <>
                <FaSun className="text-yellow-400" /> {/* Icône soleil pour le mode clair */}
              </>
            ) : (
              <>
                <FaMoon className="text-gray-800" /> {/* Icône lune pour le mode sombre */}
              </>
            )}
          </button>
          <div className={`flex items-center ${inputBgColor} rounded-lg`}>
            <input
              type="text"
              placeholder="Rechercher des vidéos..."
              className={`bg-transparent ${textColor} px-4 py-2 rounded-lg w-64 focus:outline-none`}
            />
            <FaSearch className={`${textColor} mr-4`} /> {/* Icône de recherche */}
          </div>

          <button className="bg-red-600 mr-20 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Se connecter
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`w-64 ${sidebarBgColor} p-4`}>
          <br />
          {/* Section Principale */}
          <div className="space-y-4">
            {/* Accueil */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaHome className="text-xl" />
              <span>Accueil</span>
            </div>

            {/* Shorts */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaFire className="text-xl" />
              <span>Shorts</span>
            </div>

            {/* Abonnements */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaUserFriends className="text-xl" />
              <span>Abonnements</span>
            </div>
          </div>

          {/* Séparateur */}
          <hr className={`my-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} />

          {/* Section Secondaire */}
          <div className="space-y-4">
            {/* Vous */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaUserFriends className="text-xl" />
              <span>Vous</span>
            </div>

            {/* Historique */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaHistory className="text-xl" />
              <span>Historique</span>
            </div>

            {/* Playlists */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaList className="text-xl" />
              <span>Playlists</span>
            </div>

            {/* Vos vidéos */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaPlayCircle className="text-xl" />
              <span>Vos vidéos</span>
            </div>

            {/* À regarder plus tard */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaClock className="text-xl" />
              <span>À regarder plus tard</span>
            </div>

            {/* Vidéos "J'aime" */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaThumbsUp className="text-xl" />
              <span>Vidéos j&#39;aime</span>
            </div>

            {/* Téléchargements */}
            <div className={`flex items-center space-x-2 ${textColor} ${hoverBgColor} cursor-pointer p-2 rounded-lg`}>
              <FaDownload className="text-xl" />
              <span>Téléchargements</span>
            </div>
          </div>
        </aside>

        {/* Video and Comments Section */}
        <main className="flex-1 p-6">
          {/* Video Player */}
          <div className="mb-6">
            <VideoPlayer isDarkMode={isDarkMode}  />
          </div>

          {/* Comments Section */}
          <div className={`${sidebarBgColor} rounded-lg shadow p-6`}>
            <CommentGrid isDarkMode={isDarkMode} />
          </div>
        </main>

        {/* VideoList à droite */}
        <aside className={`w-64 ${sidebarBgColor} p-4`}>
          <h2 className="text-xl font-semibold mb-4">Vidéos disponibles</h2>
          {/* Passer la fonction toggleFavorite à VideoList */}
          <VideoList isDarkMode={isDarkMode} onToggleFavorite={toggleFavorite} favorites={favorites} />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;