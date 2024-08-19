
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { crateUserByEmailPassword } = useContext(AuthContext);
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate()
    const [eyeOn, setEyeOn] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        crateUserByEmailPassword(data.email, data.password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photo
                }).then(() => {
                    setErrMsg("")
                    navigate("/")
                })
                    .catch(() => {

                    })

            })
            .catch(() => {
                setErrMsg("Email already in use.")
            })
    };
    console.log(errors);
    return (
        <div className="bg-gray-200 h-screen p-10">
            <Helmet>
                <title>Estate Stay | Register</title>
            </Helmet>
            <div className="md:w-2/3 lg:w-1/2 mx-auto   rounded-lg bg-white p-12 shadow-lg">
                <h1 className="text-center text-3xl font-semibold ">Create Your Account</h1>
                <hr className="my-8" />
                <form onSubmit={handleSubmit(onSubmit)} className="">

                    <label>
                        Your Name
                        <br />
                        <input type="text" className="border w-full  mb-1 p-2 rounded" placeholder="Enter your name" {...register("name", { required: true, })} />
                        {errors.name?.type === "required" && (
                            <p className="text-sm text-red-500 mb-3" role="alert">Name is required</p>
                        )}
                    </label>

                    <label>
                        Photo Url
                        <br />
                        <input type="text" className="border w-full  mb-1 p-2 rounded" placeholder="Enter your photo Url" {...register("photo", { required: true, })} />
                        {errors.photo?.type === "required" && (
                            <p className="text-sm text-red-500 mb-3" role="alert">Photo Url is required (demo: https://i.ibb.co/HPcnyMP/profile.png)</p>
                        )}
                    </label>

                    <label>
                        Email
                        <br />
                        <input type="email" className="border w-full  mb-1 p-2 rounded" placeholder="Enter your email address" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email?.type === "required" && (
                            <p className="text-sm text-red-500 mb-3" role="alert">Email is required</p>
                        )}
                    </label>

                    <label className="">
                        Password
                        <br />
                        <div className="relative">
                            <input type={eyeOn ? "password" : "text"} className="border w-full mb-1 p-2 rounded" placeholder="Enter your password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })} />
                            <span className="absolute right-3 top-3" onClick={() => setEyeOn(!eyeOn)}>
                                {
                                    eyeOn ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>

                        </div>

                        {errors.password?.type === "required" && (
                            <p className="text-sm text-red-500" role="alert">Password is required</p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-sm text-red-500" role="alert">Provide Strong password. Minimum one uppercase and lowercase letter and length minimum 6 or more.</p>
                        )}
                    </label>

                    <label>
                        <input type="checkbox" className="border mr-2 mb-1 p-2 rounded" placeholder="Enter your photo Url" {...register("condition", { required: true, })} />
                        <span className="font-semibold">Accept Terms & Condition</span>
                        {errors.condition?.type === "required" && (
                            <p className="text-sm text-red-500 mb-3" role="alert">Accept Terms & Condition is required</p>
                        )}
                    </label>

                    <input className="py-2 bg-primary-color w-full rounded text-white cursor-pointer mt-5" type="submit" value={"Register"} />

                    {
                        errMsg ? <p className="text-red-600 text-center mt-3">{errMsg}</p> : ""
                    }
                </form>
                <p className="font-bold my-5 text-center">Already have an Account? <Link to={'/login'}><span className="text-red-600">Login</span></Link></p>

            </div>

        </div>
    );
};

export default Register;