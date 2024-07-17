import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: "appConfig",
    initialState: {
        language: "en",
        darkMode: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { toggleDarkMode, setLanguage } = appConfigSlice.actions;

export default appConfigSlice.reducer;
