import { onAuthStateChanged, signOut } from "firebase/auth";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("header.js:onAuthStateChanged: started");
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
                console.log("header.js:onAuthStateChanged:", userObj);
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

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between sm:px-2">
            <img className="w-40" src={Logo} alt="Netflix Logo" />
            {user && (
                <div className="flex items-center p-2">
                    <span className="text-white font-bold">
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
                        className="bg-red-600 font-bold rounded-md text-white p-2"
                        onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
