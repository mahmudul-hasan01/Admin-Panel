import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const logo = 'https://s3-alpha-sig.figma.com/img/0de9/9329/80c63815bc7e14f474ec079b4fbf81fa?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4X2zIFdYY~HFEET6NoBsXfH-j3qsaCAGeymISEWNp2qF0MJxl7NruoUny-dAciS4NoA9bkOnrTBouEsJBFZEu851cNKQIgcsjuIhbJDEvJKH4IkWRl7R7uEXDfC8gZUbL4j8B1SJUDZueHDXr7f0li47Vf~8Riu-OAql546dvpt943eLNqZDM23~I4GSiMicqimZPcjyWSSfon2g3bubW6I0vgZobgFkc6IWg6EwtyzqxchzmTtNZgL9iC0lKUdvJYJ6a27qyW73TZNg544b0OAJI5dR10-BsjH1Fv0owp6fc172lhGt6gc-kZIasWfOLxfIXwj4~OSWwzRL4VuKw__'
const image = 'https://s3-alpha-sig.figma.com/img/5dec/98f1/80b8dc62f502d5e574931cdf9dcce680?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cTeLy5VDplPl4tc6rd3P5cvLBhxeORJT96ZlreFSNul9xW9WvCWV~2l4GKO2huDtNzNPIOQBjEiXiQpfSS2Rel~ihnFkUVNGpGytvSvwbFPgx0XdjSNpZmDwhDNTWnwF-wqtz7zJ6CCrXIS5rVuWFx06uO4u8EkzuVvLfTnrLQOrio9COO-AlIheKuAxSFfVuiOT~mpN9d7DeK~fz6k8pHONHY4pUPlJplF08iuG49ILmclzkBYJEyb3JBCpHuUnXYT44FrWVzZBo6aBiLC0Uq6EhJqQ03HuzDH7R8THLOvQY9JmnMh4A4ngtmARFQ0dUycRs0XAh36lXCtlIT-Reg__'

const AdminLogin = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div className="flex gap-16 justify-center items-center">
            {/* Image and Logo */}
            <div className="w-[450px] h-[500px]">
                <div className="flex items-center justify-center pl-4 md:pl-8 lg:pl-10">
                    <img className="w-24 h-24" src={logo} alt="" />
                    <h1 className="text-[#CB087D] hidden lg:block text-2xl font-bold ">Orion Trading <br /> System</h1>
                </div>
                <div>
                    <img className="w-full" src={image} alt="" />
                </div>
            </div>
            {/* Form */}
            <div className="w-full max-w-md rounded-lg px-10 pb-10 pt-8 dark:bg-zinc-900">
                <div className="mb-6 text-[#CB087D]r">
                    <h2 className="text-center text-3xl font-bold tracking-tight">Admin Login</h2>
                    <p className="text-center text-xl font-semibold dark:text-zinc-400 mt-4">Welcome to Orion Trading System</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-[450px] space-y-4 bg-[#FCEEF8] p-10 rounded-3xl">
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