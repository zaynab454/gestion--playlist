import { createSlice } from '@reduxjs/toolkit';
import { initialPlaylists } from '../../data/initialData';

const videosSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: initialPlaylists[0]?.videos || [], // S'assure d'avoir un tableau vide par défaut
    selectedVideo: initialPlaylists[0]?.videos?.[0] || null, // S'assure d'avoir une vidéo ou null
  },
  reducers: {
    selectVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
    updateVideos: (state, action) => {
      state.videos = action.payload || []; // S'assure que c'est un tableau
    },
    addLike: (state, action) => {
      if (state.selectedVideo) {
        state.selectedVideo.likes += action.payload; // Ajoute ou retire un like
      }
    },
    addDislike: (state, action) => {
      if (state.selectedVideo) {
        state.selectedVideo.dislikes += action.payload; // Ajoute ou retire un dislike
      }
    },
  },
});

export const { selectVideo, updateVideos, addLike, addDislike } = videosSlice.actions;
export default videosSlice.reducer;