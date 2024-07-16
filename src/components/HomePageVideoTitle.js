const HomePageVideoTitle = (props) => {
    const { title, overview } = props;
    return (
        <div className="w-[100%] aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black text-red-600">
            <h1 className="text-6xl font-bold p-4">{title}</h1>
            <p className="w-6/12 p-4">{overview}</p>
            <div className="flex flex-row justify-start">
                <button className="bg-white rounded-md text-black m-4 p-2 w-40 border border-black flex flex-row justify-center hover:bg-opacity-80">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                    </svg>
                    <span>Play</span>
                </button>
                <button className="bg-gray-400 rounded-md text-white m-4 p-2 w-40 border border-black hover:bg-opacity-80">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default HomePageVideoTitle;
