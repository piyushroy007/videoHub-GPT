import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailers } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useGetTrailerVideo = (movieId) => {
    console.log("useGetTrailerVideo movieId: " + movieId);

    const dispatch = useDispatch();

    const URL =
        "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US";

    console.log(URL);

    const getMovieTrailer = async () => {
        const data = await fetch(URL, API_OPTIONS);
        const json = await data.json();
        console.log("JSON data: ", json);
        const filterData = json?.results?.filter(
            (item) => item.type === "Trailer"
        );
        console.log("Filtered data: ", filterData);
        const trailer =
            filterData && filterData.length
                ? filterData[0]
                : json.results.length && json?.results[0];
        console.log("Trailer: ", trailer);
        dispatch(addMovieTrailers(trailer));
    };

    useEffect(() => {
        getMovieTrailer();
    }, []);
};

export default useGetTrailerVideo;
