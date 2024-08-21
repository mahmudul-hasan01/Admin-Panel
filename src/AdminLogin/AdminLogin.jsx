import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import image from '../assets/login1.png'
import logo from '../assets/Logo.png'

const AdminLogin = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8 px-7 lg:px-0 lg:gap-16 justify-center items-center">
            {/* Image and Logo */}
            <div className="w-[450px] h-[500px] pt-10 px-7 lg:px-0">
                <div className="flex items-center justify-center pl-4 md:pl-8 lg:pl-10">
                    <img className="w-52" src={logo} alt="" />
                </div>
                <div>
                    <img className="w-full" src={image} alt="" />
                </div>
            </div>
            {/* Form */}
            <div className="w-full max-w-md rounded-lg lg:px-10 pb-10 pt-8 dark:bg-zinc-900">
                <div className="mb-6 text-[#CB087D]">
                    <h2 className="text-center text-3xl font-bold tracking-tight">Admin Login</h2>
                    <p className="text-center text-xl font-semibold dark:text-zinc-400 mt-4">Welcome to Orion Trading System</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[450px] space-y-4 bg-[#FCEEF8] p-10 rounded-3xl">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block text-xl text-[#CB087D] font-semibold" htmlFor="_email">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            className="h-10 w-full border-b border-[#CB087D] px-3 py-2 text-sm leading-tight focus:outline-none bg-transparent focus:ring-1 dark:border-zinc-700"
                            id="_email"
                            placeholder="Enter Your Email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="relative space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block text-xl text-[#CB087D] font-semibold" htmlFor="_email">
                            Password
                        </label>
                        <input
                            {...register("password")}
                            className="h-10 w-full border-b border-[#CB087D] px-3 py-2 text-sm leading-tight focus:outline-none bg-transparent focus:ring-1 dark:border-zinc-700"
                            id="_email"
                            placeholder="Enter Your Password"
                            name="password"
                            type={`${isOpen ? 'text' : "password"}`}
                        />
                        <div className="absolute top-9 right-5 text-xl cursor-pointer">
                            {
                                isOpen ?
                                    <FiEyeOff onClick={() => setIsOpen(!isOpen)} />
                                    :
                                    <FiEye onClick={() => setIsOpen(!isOpen)}/>
                            }
                        </div>
                    </div>
                    <p className="">Forgotten password? <Link className="text-[#CB0881] text-xl font-semibold">Reset</Link></p>
                    <div className="flex justify-center">
                        <button type="submit" className="rounded-full bg-[#CB0881] px-8 py-1 text-white transition-colors">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;