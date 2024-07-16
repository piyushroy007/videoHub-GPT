import React from "react";
import { useSelector } from "react-redux";
import { LANG } from "../utils/langConstant";

export default function GptSearchInput() {
    const langKey = useSelector((store) => store.config.language);
    console.log("langKey from store :", langKey);
    console.log("lang :", LANG);
    return (
        <div className="pt-[15%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input
                    type="text"
                    placeholder={LANG[langKey].gptPlaceHolder}
                    className="p-3 m-2 rounded-md col-span-8"
                />
                <button className="bg-red-500 col-span-4 p-3 m-2 hover:bg-red-700 text-white rounded-md">
                    {LANG[langKey].search}
                </button>
            </form>
        </div>
    );
}
