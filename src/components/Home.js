import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import HomePageMainContainer from "./HomePageMainContainer";
import HomePageSecondaryContainer from "./HomePageSecondaryContainer";

const Home = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <HomePageMainContainer />
            <HomePageSecondaryContainer />
            <h1>Welcome to Home Page</h1>
        </div>
    );
};

export default Home;
