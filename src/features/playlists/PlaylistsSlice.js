import { createSlice } from '@reduxjs/toolkit';
import { initialPlaylists } from '../../data/initialData';

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlists: initialPlaylists,
    selectedPlaylist: initialPlaylists[0],
  },
  reducers: {
    selectPlaylist: (state, action) => {
      state.selectedPlaylist = state.playlists.find(
        playlist => playlist.idPlaylist === action.payload
      );
    },
  },
});

export const { selectPlaylist } = playlistsSlice.actions;
export default playlistsSlice.reducer;
