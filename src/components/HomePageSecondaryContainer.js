import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const HomePageSecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    console.log("HomePageSecondaryContainer Movies--", movies);
    return (
        <div className="bg-black">
            <div className="-mt-60 relative z-10">
                <MovieList
                    title={"Upcoming Movies"}
                    movies={movies.upcomingMovies}
                />
                <MovieList
                    title={"Trending TV Shows"}
                    movies={movies.trendingTvShows}
                />
                <MovieList
                    title={"Top Rated Movies"}
                    movies={movies.topRatedMovies}
                />
                <MovieList
                    title={"Now Playing"}
                    movies={movies.nowPlayingMovies}
                />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
            </div>
        </div>
    );
};

export default HomePageSecondaryContainer;
