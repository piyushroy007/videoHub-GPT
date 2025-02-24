import { onAuthStateChanged, signOut } from "firebase/auth";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { setLanguage } from "../utils/appConfigSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                const userObj = {
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                };
                dispatch(addUser(userObj));
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((err) => {
                navigate("/error");
            });
    };

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const isshowGptPage = useSelector((store) => store.gpt?.showGptSearch);

    const handleLangChange = (event) => {
        dispatch(setLanguage(event.target.value));
    };
    return (
        <div className="absolute w-[100%] px-6 py-2 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between">
            <img
                className="w-40 mx-auto md:mx-0"
                src={Logo}
                alt="Netflix Logo"
            />
            {user && (
                <div className="flex flex-row items-center px-[10%] md:px-0">
                    {isshowGptPage && (
                        <select
                            onChange={handleLangChange}
                            className="p-2 m-2 bg-slate-500 text-white rounded-sm">
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option key={lang.id} value={lang.id}>
                                    {lang.language}
                                </option>
                            ))}
                        </select>
                    )}
                    <button
                        className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                        onClick={handleGptSearchClick}>
                        {isshowGptPage ? "Home" : "GPT Search"}
                    </button>
                    <span className="text-white font-bold hidden md:inline-block">
                        Welcome {user.displayName}
                    </span>
                    <span className="pr-5 w-16">
                        <img
                            className="rounded-full"
                            src={user.photoURL}
                            alt="HeaderLogo"
                        />
                    </span>
                    <button
                        className="bg-red-600 font-bold rounded-md text-white p-2 w-32 md:w-auto"
                        onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
