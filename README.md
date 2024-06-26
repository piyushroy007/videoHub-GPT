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
