import { useSelector } from "react-redux";
import useGetTrailerVideo from "../customHooks/useGetTrailerVideo";

const HomePageVideoBg = (props) => {
    const { movieId } = props;
    useGetTrailerVideo(movieId);

    const trailer = useSelector((store) => store.movies?.trailerVideo);

    if (!trailer) return;

    return (
        <div className="w-[100%]">
            <iframe
                className="w-[100%] aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    trailer.key +
                    "?autoplay=1&mute=1"
                }
                title="YouTube video player"
                referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    );
};

export default HomePageVideoBg;
