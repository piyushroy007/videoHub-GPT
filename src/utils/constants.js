export const USER_IMG = "https://avatars.githubusercontent.com/u/42292564?v=4";

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};

export const POSTER_PATH_CDN = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
    { id: "en", language: "English" },
    { id: "hindi", language: "Hindi" },
    { id: "spanish", language: "Spanish" },
];
