/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const UserBalance = ({ id, refetch }) => {

    const axiosPublic = useAxiosPublic()
    const [openModal, setOpenModal] = useState(false);

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        await axiosPublic.patch(`/editBalance/${id}`, data)
        refetch()
    }

    return (
        <div>
            <div className="mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="px-3 py-1 rounded-full bg-[#E19202] text-white">
                    Balance
                </button>
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>

                        <form onSubmit={handleSubmit(onSubmit)} className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
                            <div className="flex justify-between">
                                <h1 className="pb-8 text-3xl text-start text-[#CB087D]">User Balance</h1>
                                <IoCloseSharp onClick={() => setOpenModal(false)} className="mx-auto mr-0 text-4xl cursor-pointer text-[#CB087D]" />
                            </div>
                            <div className="space-y-5">
                                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        Total Balance
                                    </label>
                                    <input {...register("totalBalance")} className="rounded-lg border w-full border-[#CB087D] bg-transparent px-4 py-2 text-[#CB087D] focus:outline-none" type="number" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-4">
                                <button type="submit" className="py-2 w-32 rounded-full mt-6 bg-[#12C703] text-white drop-shadow-lg ">
                                    Add
                                </button>
                                <button  onClick={() => setOpenModal(false)} type="button" className="py-2 w-32 rounded-full mt-6 bg-[#CB0881] text-white drop-shadow-lg ">
                                    Subtract
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBalance;