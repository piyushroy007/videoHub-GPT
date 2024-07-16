import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingTvShows } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingTVShows = () => {
    const dispatch = useDispatch();

    const getUseTrendingTVShows = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/trending/tv/day",
            API_OPTIONS
        );

        const json = await data.json();

        console.log("JSON: ", json);
        dispatch(addTrendingTvShows(json.results));
    };

    useEffect(() => {
        getUseTrendingTVShows();
    }, []);
};

export default useTrendingTVShows;
