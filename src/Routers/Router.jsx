import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/"
            }
        ]
    }
])

export default router;