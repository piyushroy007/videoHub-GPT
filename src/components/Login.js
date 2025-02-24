import { useRef, useState } from "react";
import headerImg from "../assets/HeaderImg.png";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { USER_IMG } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        email.current.value = "";
        password.current.value = "";
        if (!isSignInForm) name.current.value = "";
    };

    const handleButtonClick = () => {
        // handle validation of the form
        const msg = checkValidData(
            email.current.value,
            password.current.value,
            !isSignInForm && name.current.value,
            isSignInForm
        );
        setErrorMessage(msg);

        if (msg) return;

        // Sign In or Sign Up Logic Here
        // For example:
        if (!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: USER_IMG,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            const userObj = {
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL,
                            };
                            dispatch(addUser(userObj));
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMessage(
                                "Error :" + errorCode + ": " + errorMessage
                            );
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(
                        "Error :" + errorCode + ": " + errorMessage
                    );
                    // ..
                });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(
                        "Error :" + errorCode + ": " + errorMessage
                    );
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    className="w-screen h-screen object-cover"
                    src={headerImg}
                    alt="Header Backround"></img>
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute p-20 bg-slate-900 text-white 
                        w-full md:w-4/12 my-36 mx-2 md:mx-auto right-0 left-0 
                        bg-opacity-80 rounded-lg">
                <h3 className="font-bold p-3 mb-6 text-3xl ">
                    {isSignInForm ? "Sign In" : "Sign up"}
                </h3>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Please Enter Your User Name"
                        className="p-4 m-3 w-full bg-slate-500"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Please Enter Your Email"
                    className="p-4 m-3 w-full bg-slate-500"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Please Enter Your Password"
                    className="p-4 m-2 w-full bg-slate-500"
                />
                {errorMessage && (
                    <p className="text-red-500 m-2">{errorMessage}</p>
                )}
                <button
                    onClick={handleButtonClick}
                    type="submit"
                    className="p-4 m-2 bg-red-500 text-white w-full rounded-md">
                    {isSignInForm ? "Sign In" : "Sign up"}
                </button>

                <div>
                    <p
                        className="text-white font-bold m-2 cursor-pointer"
                        onClick={toggleSignInForm}>
                        {isSignInForm
                            ? "Are you new to videoHub-GPT? Sign Up"
                            : "Already Signed up. Sign In"}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
