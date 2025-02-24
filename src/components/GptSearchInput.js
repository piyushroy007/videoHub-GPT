import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LANG } from "../utils/langConstant";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addMovieName } from "../utils/gptSlice";

export default function GptSearchInput() {
    const langKey = useSelector((store) => store.config.language);
    const dispatch = useDispatch();

    const searchText = useRef(null);

    const getSearchMovie = async (url) => {
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();

        return json;
    };

    const handleGptSearch = async () => {
        const url =
            "https://api.themoviedb.org/3/search/movie?query=" +
            searchText.current.value +
            "&include_adult=false&language=en-US&page=1";

        // Call the API and get the movie list
        const movieList = await getSearchMovie(url);

        dispatch(
            addMovieName({
                movieName: searchText.current.value,
                movieList: movieList,
            })
        );

        // const gptQuery =
        //     "Act as a Movie Recommendation system and suggest some movies for the query : " +
        //     searchText.current.value +
        //     ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        // const chatResults = await openai.chat.completions.create({
        //     messages: [{ role: "user", content: gptQuery }],
        //     model: "gpt-3.5-turbo",
        // });

        // console.log("chat   results: " + chatResults);
    };

    return (
        <div className="pt-[15%] flex justify-center">
            <form
                className="w-full m-2 md:w-1/2 bg-black grid grid-cols-12"
                onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text"
                    placeholder={LANG[langKey].gptPlaceHolder}
                    className="p-3 m-2 rounded-md col-span-8"
                />
                <button
                    onClick={handleGptSearch}
                    className="bg-red-500 col-span-4 p-3 m-2 hover:bg-red-700 text-white rounded-md">
                    {LANG[langKey].search}
                </button>
            </form>
        </div>
    );
}
