import { POSTER_PATH_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-52 pr-4">
            <img alt="Movie Card" src={POSTER_PATH_CDN + posterPath} />
        </div>
    );
};

export default MovieCard;
