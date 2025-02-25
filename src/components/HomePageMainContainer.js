import { useSelector } from "react-redux";
import HomePageVideoTitle from "./HomePageVideoTitle";
import HomePageVideoBg from "./HomePageVideoBg";

const HomePageMainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[0];

    return (
        <div className="pt-44 md:pt-0 bg-black">
            <HomePageVideoTitle
                title={mainMovie?.original_title}
                overview={mainMovie?.overview}
            />
            <HomePageVideoBg movieId={mainMovie?.id} />
        </div>
    );
};

export default HomePageMainContainer;
