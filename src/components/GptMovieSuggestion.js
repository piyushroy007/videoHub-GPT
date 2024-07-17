import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { movieName, movieList } = useSelector((store) => store.gpt);

    if (!movieName) return;

    return (
        <div className="bg-black text-white p-4 m-4">
            <MovieList title={movieName} movies={movieList["results"]} />
        </div>
    );
};

export default GptMovieSuggestion;
