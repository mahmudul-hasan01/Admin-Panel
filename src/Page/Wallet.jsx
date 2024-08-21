import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Wallet = () => {

    const [withdraw, setWithdraw] = useState(true)
    const [searchInfo, setSearchInfo] = useState('')
    // const [allWithdraw, setAllWithdraw] = useState(true)

    const axiosPublic = useAxiosPublic()

    const handleSearch = (e) => {
        const searchData = e.target.value
        setSearchInfo(searchData);
    }

    const { data, refetch } = useQuery({
        queryKey: ['withdraws', searchInfo],
        queryFn: async () => {
            const info = await axiosPublic.get(`/withdraws?search=${searchInfo}`)
            return info?.data
        }
    })

    const { data: deposite = [], refetch: depositeRefetch } = useQuery({
        queryKey: ['deposites', searchInfo],
        queryFn: async () => {
            const info = await axiosPublic.get(`/deposites?search=${searchInfo}`)
            return info?.data
        }
    })

    const handleApproved = async (id) => {

        const info = await axiosPublic.patch(`/approved/${id}`, { approved: 'Approved' })
        console.log(info.data);
        refetch()
    }

    const handleDepositeApproved = async (id) => {
        await axiosPublic.patch(`/deposite/${id}`, { approved: 'Approved' })
        depositeRefetch()
    }

    return (
        <div>
            {/* State manage */}
            <div className="flex justify-between pt-5 px-5">
                <p className="text-[18px] font-bold text-[#CB0881] border-b border-[#CB0881] flex items-center">
                    {withdraw ? "Withdraw" : "Deposite"}
                </p>
                <div className="space-x-5">
                    <button onClick={() => setWithdraw(!withdraw)} className="px-4 py-1 rounded-full bg-[#CB0881] text-white">{withdraw ? "Deposite" : "Withdraw"}</button>
                </div>
            </div>
            {/* info */}
            <div className="py-10 space-y-10">
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-80 md:w-40 lg:w-60 xl:w-80 h-[75px]  bg-[#FCEEF8] pl-6 pt-2 rounded-xl">
                        <p className="font-semibold text-[#12C703]">Approved</p>
                        <p className=" font-bold text-xl">USD $0.00</p>
                    </div>
                    <div className="w-80 md:w-40 lg:w-60 xl:w-80 h-[75px]  bg-[#FCEEF8] pl-6 pt-2 rounded-xl">
                        <p className="font-semibold text-[#E19202]">Pending</p>
                        <p className=" font-bold text-xl">USD $0.00</p>
                    </div>
                    <div className="w-80 md:w-40 lg:w-60 xl:w-80 h-[75px]  bg-[#FCEEF8] pl-6 pt-2 rounded-xl">
                        <p className="font-semibold text-[#F81212]">Rejected</p>
                        <p className=" font-bold text-xl">USD $0.00</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    {
                        withdraw ?
                            <div>
                                {/* Text */}
                                <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">All Withdrawal History</p>
                                {/* Search */}
                                <div className="flex justify-end items-center gap-2 py-10">
                                    <div className="relative w-max rounded-full">
                                        <input onKeyUp={handleSearch} className="peer rounded-full border w-60 placeholder:text-white bg-[#CB0881] pl-12 py-1 text-white focus:outline-none" type="text" placeholder="Search" id="navigate_ui_input_33" />
                                        <IoSearchSharp className="absolute top-2 left-4 text-white text-xl  " />
                                    </div>
                                </div>
                                {/* All Withdrawal History */}
                                <div className="space-y-5 overflow-x-auto">
                                    {
                                        data?.map(item => (
                                            <div key={item._id} className="flex justify-around pt-5 w-[700px] lg:w-full h-32 bg-[#FCEEF8] rounded-2xl font-semibold overflow-auto" >
                                                <div className="flex flex-col items-center">
                                                    <p>2332640</p>
                                                    <button onClick={() => handleApproved(item._id)} type="button" className={`py-2 px-4 rounded-full mt-6 ${item.status === 'Pending' ? 'bg-[#949393]' : 'bg-[#12C703]'} text-white drop-shadow-lg font-normal`}>
                                                        {item.status}
                                                    </button>
                                                </div>
                                                <div>
                                                    <p>USDT- {item.amount}</p>
                                                </div>
                                                <div>
                                                    <p>{item?.createdAt?.split('17:28:35')[0]}</p>
                                                    {/* <p>12 June, 2024</p> */}
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <p>{item?.createdAt?.split(' ')[4]}</p>
                                                    {/* <p>06 : 00 AM</p> */}
                                                    <button type="button" className="py-2 px-4 rounded-full mt-6 bg-[#3470E4] text-white drop-shadow-lg  font-normal">
                                                        View User
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                            :
                            <div>
                                {/* Text */}
                                <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">All Deposite History</p>
                                {/* Search */}
                                <div className="flex justify-end items-center gap-2 py-10">
                                    <div className="relative w-max rounded-full">
                                        <input className="peer rounded-full border w-60 placeholder:text-white bg-[#CB0881] pl-12 py-1 text-white focus:outline-none" type="text" placeholder="Search" id="navigate_ui_input_33" />
                                        <IoSearchSharp className="absolute top-2 left-4 text-white text-xl  " />
                                    </div>
                                </div>
                                {/* All Deposite History */}
                                <div className="space-y-5 overflow-x-auto">
                                    {
                                        deposite?.map(item => (
                                            <div key={item._id} className="flex justify-around pt-5 w-[700px] lg:w-full h-32 bg-[#FCEEF8] rounded-2xl font-semibold ">
                                                <div className="flex flex-col items-center">
                                                    <p>2332640</p>
                                                    <button onClick={() => handleDepositeApproved(item._id)} type="button" className={`py-2 px-4 rounded-full mt-6 ${item.status === 'Pending' ? 'bg-[#949393]' : 'bg-[#12C703]'} text-white drop-shadow-lg font-normal`}>
                                                        {item.status}
                                                    </button>
                                                </div>
                                                <div>
                                                    <p>USDT- {item.amount}</p>
                                                </div>
                                                <div>
                                                    <p>{item?.createdAt?.split('17:28:35')[0]}</p>
                                                    {/* <p>12 June, 2024</p> */}
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <p>{item?.createdAt?.split(' ')[4]}</p>
                                                    {/* <p>06 : 00 AM</p> */}
                                                    <button type="button" className="py-2 px-4 rounded-full mt-6 bg-[#3470E4] text-white drop-shadow-lg  font-normal">
                                                        View User
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Wallet;