import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer from '../features/playlists/playlistsSlice';
import videosReducer from '../features/videos/videosSlice';
import favoritesReducer from '../features/favorites/favoritesSlice'; // Importer la slice des favoris


export const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
    videos: videosReducer,
    favorites: favoritesReducer,
  },
});
