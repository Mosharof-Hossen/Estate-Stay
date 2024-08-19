import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { loginByEmailPassword, loginByGoogle } = useContext(AuthContext);
    const [eyeOn, setEyeOn] = useState(true)
    const [err, setErr] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginByEmailPassword(data.email, data.password)
            .then(() => {
                setErr("");
                navigate(location?.state ? location.state : "/");
            })
            .catch(() => {
                setErr("Invalid Email or Password")
            })
    };

    const handleGoogleLogin = () => {
        loginByGoogle()
            .then(() => {
                setErr("");
                navigate(location?.state ? location.state : "/")
            })
    }
    const handleGithubLogin = () => {

    }
    return (
        <div className="bg-gray-200 h-screen p-10">
            <Helmet>
                <title>Estate Stay | Login</title>
            </Helmet>
            <div className="md:w-2/3 lg:w-1/2 mx-auto   rounded-lg bg-white p-12 shadow-lg">
                <h1 className="text-center text-3xl font-semibold ">Login Your Account</h1>
                <hr className="my-8" />
                <form onSubmit={handleSubmit(onSubmit)} className="">

                    <label>
                        Email
                        <br />
                        <input type="text" className="border w-full  mb-1 p-2 rounded" placeholder="Enter your email address" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email?.type === "required" && (
                            <p className="text-sm text-red-500 mb-3" role="alert">Email is required</p>
                        )}
                    </label>

                    <label className="">
                        Password
                        <br />
                        <div className="relative">
                            <input type={eyeOn ? "password" : "text"} className="border w-full mb-1 p-2 rounded" placeholder="Enter your password" {...register("password", { required: true })} />
                            <span className="absolute right-3 top-3" onClick={() => setEyeOn(!eyeOn)}>
                                {
                                    eyeOn ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>

                        </div>

                        {errors.password?.type === "required" && (
                            <p className="text-sm text-red-500" role="alert">Password is required</p>
                        )}
                    </label>

                    <input className="py-2 bg-primary-color w-full rounded text-white cursor-pointer mt-5" type="submit" value={"Login"} />
                    <ToastContainer />
                    {
                        err ? <p className="text-center text-red-500 mt-3">{err}</p> : ""
                    }
                </form>
                <p className="font-bold my-5 text-center">Do not have an Account? <Link to={'/register'}><span className="text-red-600">Register</span></Link></p>

                <div className="divider divider-success my-8">Or</div>

                <div className="space-x-5 text-center">
                    <button onClick={handleGoogleLogin} className="btn bg-primary-color hover:text-black text-white">
                        Google
                        <FontAwesomeIcon icon={faGoogle} />
                    </button>
                    <button onClick={handleGithubLogin} className="btn bg-primary-color  hover:text-black text-white">
                        Github
                        <FontAwesomeIcon icon={faGithub} />
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Login;

