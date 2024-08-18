import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log("ok");
    };
    console.log(errors);
    return (
        <div className="bg-gray-200 h-screen p-10">
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
                        <input type="password" className="border w-full  mb-1   p-2 rounded" placeholder="Enter your password" {...register("password", { required: true })} />
                        {errors.password?.type === "required" && (
                            <p className="text-sm text-red-500" role="alert">Password is required</p>
                        )}
                    </label>

                    <input className="py-2 bg-primary-color w-full rounded text-white cursor-pointer mt-5" type="submit" value={"Login"} />
                </form>
                <p className="font-bold my-5 text-center">Do not have an Account? <Link to={'/register'}><span className="text-red-600">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;

