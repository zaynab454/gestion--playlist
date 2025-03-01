// features/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [], // Liste des vidéos favorites
  },
  reducers: {
    // Ajouter ou retirer une vidéo des favoris
    toggleFavorite: (state, action) => {
      const video = action.payload;
      const index = state.favorites.findIndex((fav) => fav.id === video.id);
      if (index === -1) {
        // Si la vidéo n'est pas dans les favoris, on l'ajoute
        state.favorites.push(video);
      } else {
        // Sinon, on la retire
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;