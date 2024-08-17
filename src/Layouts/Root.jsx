import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-white max-w-6xl mx-auto">
            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>
    );
};

export default Root;