import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

const AddNewStaff = () => {

    const [openModal, setOpenModal] = useState(false);

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div>
            <div className="mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="px-3 py-2 rounded-full bg-[#CB0881] text-white">
                    + Add New Staf
                </button>
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>

                        <form onSubmit={handleSubmit(onSubmit)} className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
                            <div className="flex justify-between">
                                <h1 className="pb-8 text-3xl text-start text-[#CB087D]">Add New Staffs</h1>
                                <IoCloseSharp onClick={() => setOpenModal(false)} className="mx-auto mr-0 text-4xl cursor-pointer text-[#CB087D]" />
                            </div>
                            <div className="space-y-1">
                                <div>
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        Select Picture
                                    </label>
                                    <input {...register("picture")} className="file:h-20 w-[170px] file:border-0 file:w-[170px] file:bg-[#949393] file:flex file:flex-col file:shadow-2xl rounded-xl" type="file" />
                                </div>
                                <div className="space-y-1 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        Name
                                    </label>
                                    <input {...register("name")} className="rounded-lg border w-full border-[#CB087D] bg-transparent px-4 py-1 text-[#CB087D] focus:outline-none" type="text" placeholder="Enter Name" />
                                </div>
                                <div className="space-y-1 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        UserName
                                    </label>
                                    <input {...register("userName")} className="rounded-lg border w-full border-[#CB087D] bg-transparent px-4 py-1 text-[#CB087D] focus:outline-none" type="text" placeholder="Enter User Name" />
                                </div>
                                <div className="space-y-1 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        Email
                                    </label>
                                    <input {...register("email")} className="rounded-lg border w-full border-[#CB087D] bg-transparent px-4 py-1 text-[#CB087D] focus:outline-none" type="email" placeholder="Enter Email" />
                                </div>
                                <div className="space-y-1 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        Phone
                                    </label>
                                    <input {...register("phone")} className="rounded-lg border w-full border-[#CB087D] bg-transparent px-4 py-1 text-[#CB087D] focus:outline-none" type="text" placeholder="Enter Phone" />
                                </div>
                                <div className="space-y-1 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        Password
                                    </label>
                                    <input {...register("password")} className="rounded-lg border w-full border-[#CB087D] bg-transparent px-4 py-1 text-[#CB087D] focus:outline-none" type="password" placeholder="Enter Password" />
                                </div>
                                <div className="space-y-1 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        Select Role
                                    </label>
                                    <input {...register("role")} className="rounded-lg border w-full border-[#CB087D] bg-transparent px-4 py-1 text-[#CB087D] focus:outline-none" type="text" placeholder="Enter Select Role" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="py-2 w-full rounded-full mt-6 bg-[#12C703] text-white drop-shadow-lg ">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewStaff;