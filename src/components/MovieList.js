import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    const filteredMovies =
        movies && movies.filter((m) => m.poster_path !== null);
    return (
        <div className="p-6">
            <h1 className="text-3xl text-white py-2">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex ">
                    {filteredMovies &&
                        filteredMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                posterPath={movie?.poster_path}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
