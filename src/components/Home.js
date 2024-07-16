import { useSelector } from "react-redux";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTrendingMovies";
import useTrendingTVShows from "../customHooks/useTrendingTVShows";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import HomePageMainContainer from "./HomePageMainContainer";
import HomePageSecondaryContainer from "./HomePageSecondaryContainer";

const Home = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useTrendingTVShows();
    const isshowGptPage = useSelector((store) => store.gpt?.showGptSearch);

    return (
        <div>
            <Header />
            {isshowGptPage ? (
                <GptSearch />
            ) : (
                <>
                    <HomePageMainContainer />
                    <HomePageSecondaryContainer />
                </>
            )}
        </div>
    );
};

export default Home;
