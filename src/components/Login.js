import { useState } from "react";
import headerImg from "../assets/HeaderImg.png";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <div className="absolute">
                <img src={headerImg} alt="Header Backround"></img>
            </div>
            <form className="absolute p-20 bg-slate-900 text-white w-4/12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
                <h3 className="font-bold p-3 mb-6 text-3xl ">
                    {isSignInForm ? "Sign In" : "Sign up"}
                </h3>
                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Please Enter Your User Name"
                        className="p-4 m-3 w-full bg-slate-500"
                    />
                )}
                <input
                    type="text"
                    placeholder="Please Enter Your Email"
                    className="p-4 m-3 w-full bg-slate-500"
                />
                <input
                    type="password"
                    placeholder="Please Enter Your Password"
                    className="p-4 m-2 w-full bg-slate-500"
                />
                <button
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
