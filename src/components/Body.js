import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";

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
        {
            path: "/",
            element: <Home />,
        },
    ]);
    return (
        <div>
            <Header />
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
};

export default Body;
