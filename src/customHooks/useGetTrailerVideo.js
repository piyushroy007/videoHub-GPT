import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailers } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useGetTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const URL =
        "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US";

    const getMovieTrailer = async () => {
        const data = await fetch(URL, API_OPTIONS);
        const json = await data.json();

        const filterData = json?.results?.filter(
            (item) => item.type === "Trailer"
        );

        const trailer =
            filterData && filterData.length
                ? filterData[0]
                : json.results.length && json?.results[0];

        dispatch(addMovieTrailers(trailer));
    };

    useEffect(() => {
        !trailerVideo && getMovieTrailer();
    }, []);
};

export default useGetTrailerVideo;
