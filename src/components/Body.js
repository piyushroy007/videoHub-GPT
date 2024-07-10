import {
    RouterProvider,
    createBrowserRouter,
    useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Home />,
        },
    ]);

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
                console.log("userObj:onAuthStateChanged:", userObj);
                dispatch(addUser(userObj));
                // ...
            } else {
                // User is signed out
                dispatch(removeUser());
            }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
};

export default Body;
