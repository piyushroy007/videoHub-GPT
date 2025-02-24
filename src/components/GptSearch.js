import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchInput from "./GptSearchInput";
import headerImg from "../assets/HeaderImg.png";

const GptSearch = () => {
    return (
        <>
            <div className="absolute -z-10">
                <img
                    className="h-screen object-cover w-screen"
                    src={headerImg}
                    alt="Header Backround"></img>
            </div>
            <div className="pt-[30%] md:pt-0">
                <GptSearchInput />
                <GptMovieSuggestion />
            </div>
        </>
    );
};

export default GptSearch;
