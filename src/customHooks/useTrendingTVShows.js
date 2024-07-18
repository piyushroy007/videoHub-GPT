import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingTvShows } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingTVShows = () => {
    const dispatch = useDispatch();

    const trendingTvShows = useSelector(
        (store) => store.movies.trendingTvShows
    );
    const getUseTrendingTVShows = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/trending/tv/day",
            API_OPTIONS
        );

        const json = await data.json();

        dispatch(addTrendingTvShows(json.results));
    };

    useEffect(() => {
        !trendingTvShows && getUseTrendingTVShows();
    }, []);
};

export default useTrendingTVShows;
