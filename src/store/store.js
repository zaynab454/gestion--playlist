import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer from '../features/playlists/playlistsSlice';
import videosReducer from '../features/videos/videosSlice';

export const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
    videos: videosReducer,
  },
});
