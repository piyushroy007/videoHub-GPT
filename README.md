# videohub-gpt

    VideoHub-GPT is a React-based web application designed to emulate a streamlined movie streaming experience akin to Netflix.
    Users can seamlessly create accounts via Firebase-powered login and signup functionalities, leading them to a dynamic browse page.
    This page features a prominent main movie section with an engaging background trailer, accompanied by essential details like 
    title and description, and curated movie suggestions presented as multiple MovieLists. 
    Additionally, VideoHub-GPT incorporates a robust search bar and intelligent movie suggestions, enhancing user discovery and exploration within the movie hub.
    
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

## Project Screen Shots :

Login Page : 
    
![LoginPage](https://github.com/user-attachments/assets/f71ffd7f-a201-44e1-814b-d1703f072442)

SignUp Page : 
    
![signupPage](https://github.com/user-attachments/assets/5dc643e2-2b71-4da5-9aa1-01e648b0511c)

Home Page :
    
![HomePage](https://github.com/user-attachments/assets/38059f26-270f-486e-875e-23421ec2ecd6)

Multiple Lang Support(English,Hindi,Spanish) :
    
![LangSupport](https://github.com/user-attachments/assets/c01211e2-b66e-4c28-abac-64f637c53b60)

Chat GPT Integrated :
    
![ChatGPTadded](https://github.com/user-attachments/assets/08e94da6-e4a9-4488-9f27-27d8c47b2ac1)

Other Pages :
    
![HorizontalScrolling](https://github.com/user-attachments/assets/4edab9dc-b5c2-4460-ae45-8550656be1f1)

![UpcomingMovies](https://github.com/user-attachments/assets/4691a961-9f45-45d6-9280-cc5c6444deb5)

![topRatedMovies](https://github.com/user-attachments/assets/d49ec513-10df-4c3f-bdab-df7af6554d5f)

Tab Friendly  :
    
![tabSupport](https://github.com/user-attachments/assets/4d1d5b17-766a-4312-a75a-8915ee5da5de)
    
Mobile Friendly : 
    
![MobileSupport](https://github.com/user-attachments/assets/bfdfb47f-0f74-4db3-b26c-dcdd25e3f9c0)

    
![MobileSupport3](https://github.com/user-attachments/assets/20d77f9e-f9c4-4e73-a472-2118302bb34e)

    
![MobileSupport2](https://github.com/user-attachments/assets/2f9ff879-dbd8-4174-89eb-6f803bdaa4a4)




    
