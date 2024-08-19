import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import userProfile from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast("Successfully Logout")
            })
    }
    const links = <>
        <li><NavLink className={"lg:px-3 lg:py-2 block p-2 rounded mx-2 font-semibold"} to={'/'} >Home</NavLink ></li>
        {
            user ?
                <li><NavLink className={"lg:px-3 lg:py-2 block p-2 rounded mx-2 font-semibold"} to={'/profile'} >Profile</NavLink ></li>
                : ""
        }
        <li><NavLink className={"lg:px-3 lg:py-2 block p-2 rounded mx-2 font-semibold"} to={'/about'} >About</NavLink ></li>
        <li><NavLink className={"lg:px-3 lg:py-2 block p-2 rounded mx-2 font-semibold"} to={'/contact'} >Contact</NavLink ></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to={"/"} className="text-primary-color  text-2xl font-font-pacifico">Estate Stay</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2 tooltip tooltip-bottom" data-tip={user?.displayName}>
                    <div className="rounded-full w-full">

                        <img
                            alt="Profile Pic"
                            src={user ? user.photoURL : userProfile} />

                    </div>
                </div>
                {
                    user ?
                        <Link ><button onClick={handleLogout} className="btn text-white bg-primary-color">LogOut</button></Link>
                        :
                        <Link to={"/login"}><button className="btn text-white bg-primary-color">Login</button></Link>
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;