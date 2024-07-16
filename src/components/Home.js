import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTrendingMovies";
import useTrendingTVShows from "../customHooks/useTrendingTVShows";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import Header from "./Header";
import HomePageMainContainer from "./HomePageMainContainer";
import HomePageSecondaryContainer from "./HomePageSecondaryContainer";

const Home = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useTrendingTVShows();

    return (
        <div>
            <Header />
            <HomePageMainContainer />
            <HomePageSecondaryContainer />
        </div>
    );
};

export default Home;
