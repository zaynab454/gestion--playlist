import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlaylist } from '../features/playlists/playlistsSlice';

const PlaylistMenu = () => {
  const playlists = useSelector((state) => state.playlists.playlists);
  const dispatch = useDispatch();

  return (
    <div>
      {playlists.map((playlist) => {
        // Vérifie si playlist.videos existe et n'est pas vide
        const thumbnail = playlist.videos?.[0]?.miniature || 'default-thumbnail.jpg';

        return (
          <div
            key={playlist.idPlaylist}
            className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
            onClick={() => dispatch(selectPlaylist(playlist.idPlaylist))}
          >
            <img
              src={thumbnail}
              alt={playlist.titre}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <div className="mt-2 text-center">
              <h5 className="text-white font-semibold ">{playlist.titre}</h5>
              <p className="text-gray-400 text-sm ">{playlist.categorie}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistMenu;