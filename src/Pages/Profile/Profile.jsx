
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const Profile = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        updateProfile(user, {
            displayName: data.name,
            photoURL: data.photo
        })
            .then(() => {
                alert("Profile Updated")
                window.location.reload()
            })
            .catch(() => {
                
            })

    };
    return (
        <div className="bg-gray-200 h-screen p-10">

            <div className="md:w-2/3 lg:w-1/2 mx-auto   rounded-lg bg-white p-12 shadow-lg">
                <h1 className="text-center text-3xl font-semibold ">Profile Update</h1>
                <hr className="my-8" />
                <form onSubmit={handleSubmit(onSubmit)} className="">

                    <label>
                        Your Name
                        <br />
                        <input type="text" className="border w-full  mb-1 p-2 rounded" placeholder={user?.displayName} {...register("name", { required: true, })} />
                        {errors.name?.type === "required" && (
                            <p className="text-sm text-red-500 mb-3" role="alert">Name is required</p>
                        )}
                    </label>

                    <label>
                        Photo Url
                        <br />
                        <input type="text" className="border w-full  mb-1 p-2 rounded" placeholder={user?.photoURL} {...register("photo", { required: true, })} />
                        {errors.photo?.type === "required" && (
                            <p className="text-sm text-red-500 mb-3" role="alert">Photo Url is required (demo: https://i.ibb.co/HPcnyMP/profile.png)</p>
                        )}
                    </label>





                    <input className="py-2 bg-primary-color w-full rounded text-white cursor-pointer mt-5" type="submit" value={"Save and Update"} />

                </form>

            </div>

        </div>
    );
};

export default Profile;