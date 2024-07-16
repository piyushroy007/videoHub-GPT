import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchInput from "./GptSearchInput";
import headerImg from "../assets/HeaderImg.png";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={headerImg} alt="Header Backround"></img>
            </div>
            <GptSearchInput />
            <GptMovieSuggestion />
        </div>
    );
};

export default GptSearch;
