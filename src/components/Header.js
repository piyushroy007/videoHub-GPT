import { signOut } from "firebase/auth";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                navigate("/error");
            });
    };
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
            <img className="w-40" src={Logo} alt="Netflix Logo" />
            {user && (
                <div className="flex items-center p-2">
                    <span className="text-white font-bold">
                        Welcome {user.displayName}
                    </span>
                    <span className="pr-5 w-16">
                        <img className="rounded-full" src={user.photoURL} />
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
