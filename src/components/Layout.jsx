import React from 'react';
import { FaSearch } from 'react-icons/fa'; 
import PlaylistMenu from './PlaylistMenu';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import CommentGrid from './CommentGrid';

const Dashboard = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
  {/* Logo à gauche */}
  <div className="text-2xl font-bold flex-shrink-0">
    <img src="/public/images/logoOfppt.png" alt="Logo VideoHub" className="h-36 w-auto" />
  </div>

  {/* Input et bouton à droite avec espace */}
  <div className="flex items-center space-x-6 flex-shrink-0">
     <div className="flex items-center bg-gray-700 rounded-lg dark:bg-gray-600">
              <input
                type="text"
                placeholder="Rechercher des vidéos..."
                className="bg-transparent text-white px-4 py-2 rounded-lg w-64 focus:outline-none"
              />
              <FaSearch className="text-white mr-4" /> {/* Icône de recherche */}
            </div>

    <button className="bg-red-600 mr-10 text-white px-4 py-2 rounded-lg hover:bg-red-700">
      Se connecter
    </button>
  </div>
</nav>

      {/* Main Content */}
      <div className="flex">
  {/* Sidebar */}
  <aside className="w-64 bg-gray-800 p-4">
    {/* Playlist Menu */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Menu</h3>
      <PlaylistMenu />
    </div>

    {/* Suggested Videos Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Suggestions</h3>
      <VideoList />
    </div>
  </aside>

  {/* Video and Comments Section */}
  <main className="flex-1 p-6">
    {/* Video Player */}
    <div className="mb-6">
      <VideoPlayer />
    </div>

    {/* Comments Section */}
    <div className="bg-gray-800 rounded-lg shadow p-6">
      <CommentGrid />
    </div>
  </main>
</div>
    </div>
  );
};

export default Dashboard;
