import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingTvShows: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrendingTvShows: (state, action) => {
            state.trendingTvShows = action.payload;
        },
        addMovieTrailers: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const {
    addNowPlayingMovies,
    addMovieTrailers,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addTrendingTvShows,
} = movieSlice.actions;

export default movieSlice.reducer;
