import { useSelector } from "react-redux";
import useGetTrailerVideo from "../customHooks/useGetTrailerVideo";

const HomePageVideoBg = (props) => {
    const { movieId } = props;
    useGetTrailerVideo(movieId);

    const trailer = useSelector((store) => store.movies?.trailerVideo);
    console.log("HomePageVideoBg trailer: " + trailer);

    if (!trailer) return;

    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    trailer.key +
                    "?autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    );
};

export default HomePageVideoBg;
