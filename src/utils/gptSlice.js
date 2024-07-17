import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieName: null,
        movieList: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMovieName: (state, action) => {
            const { movieName, movieList } = action.payload;
            state.movieName = movieName;
            state.movieList = movieList;
        },
    },
});

export const { toggleGptSearchView, addMovieName } = gptSlice.actions;

export default gptSlice.reducer;
