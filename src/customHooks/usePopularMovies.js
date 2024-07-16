import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getUsePopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );

        const json = await data.json();

        console.log("JSON: ", json);
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getUsePopularMovies();
    }, []);
};

export default usePopularMovies;
