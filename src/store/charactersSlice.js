import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};

const ENDPOINT = "https://swapi.dev/api/people/?search=";

export const fetchCharactersFromAPI = createAsyncThunk(
    "characters/fetchCharacters",
    async (searchTerm) => {
      const response = await fetch(
        ENDPOINT + searchTerm.toLowerCase()
      ).then((response) => response.json());
      return response.results;
    }
  );

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    add: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: {
    [fetchCharactersFromAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchCharactersFromAPI.pending]: (state, action) => {
        state.loading = true;
      },
  },
});
