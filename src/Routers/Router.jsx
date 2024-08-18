import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Profile from "../Pages/Profile/Profile";
import SegmentDetails from "../Pages/SegmentDetails/SegmentDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path:"/segment-details/:segmentId",
                loader:()=> fetch("../data.json"),
                element:<SegmentDetails></SegmentDetails>
            }
        ]
    }
])

export default router;