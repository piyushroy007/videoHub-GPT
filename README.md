# videohub-gpt

# Create Project

-   npx create-react-app my-project
-   cd my-project

# Install tailwind and Configure it

    - npm install -D tailwindcss
    - npx tailwindcss init

# confgure tailwind.config.js

    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

# configure index.css

    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;

# run project

    npm run start

# Git setup

    1.git init
    2.git branch -M main
    3.git remote add origin https......
    4.git add .
    5.git coomit -m "....."
    6.git push -u origin main

# Features

    Login/Sign up
        - sing in/ sign up form
            - Create user account in firebase account
        - redirect to browse page
    Browse Page
        - Header
        - Main Movie
            - Trailer in Background
            - Title & Description
            - Movie Suggestions
                - MovieList * N
    VideoHub-GPT
        - search Bar
        - Movie Suggestions

# Install react-router-dom

npm install -D react-router-dom

# Install Firebase

npm install firebase
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

# Creating a user in Firebase

    - signInWithEmailAndPassword
    - createUserWithEmailAndPassword
    - getAuth

# Setup Redux

    - npm i -D @reduxjs/toolkit
    - npm i -D react-redux

    - Created store
    - created userSlice and reducer
        - created actions
        - exported actions
    - used the reducer from userlsice in appStore

## themoviedb API :

'https://api.themoviedb.org/3/search/person?query=tom&include_adult=false&language=en-US&page=1';
