import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const Body = () => {
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

    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
};

export default Body;
