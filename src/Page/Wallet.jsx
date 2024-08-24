import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Deposite from "../Components/Deposite";
import Withdraw from "../Components/Withdraw";

const Wallet = () => {

    const [withdraw, setWithdraw] = useState(true)
    const [searchInfo, setSearchInfo] = useState('')
    // const [allWithdraw, setAllWithdraw] = useState(true)

    const axiosPublic = useAxiosPublic()

    const handleSearch = (e) => {
        const searchData = e.target.value
        setSearchInfo(searchData);
    }

    // withdraw
    const { data, refetch } = useQuery({
        queryKey: ['withdraws'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/user/all/withdraw`)
            return info?.data
        }
    })
    const filteredWithdraw = data?.withdraw.filter(user =>
        user.status.toLowerCase().includes(searchInfo.toLowerCase())
    );

    // deposit
    const { data: deposite = [], refetch: depositeRefetch } = useQuery({
        queryKey: ['deposites'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/user/all/deposit`)
            return info?.data
        }
    })
    const filteredDeposite = data?.withdraw.filter(user =>
        user.status.toLowerCase().includes(searchInfo.toLowerCase())
    )

    // approved-withdraw
    const handleApproved = async (id) => {

        const info = await axiosPublic.patch(`/approved/${id}`, { approved: 'Approved' })
        console.log(info.data);
        refetch()
    }

    // approved-deposite
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

            <div>
                <div>
                    {
                        withdraw ?
                            <Withdraw filteredWithdraw={filteredWithdraw} handleSearch={handleSearch} handleApproved={handleApproved} />
                            :
                            <Deposite filteredDeposite={filteredDeposite} handleDepositeApproved={handleDepositeApproved} />
                    }
                </div>

            </div>
        </div>
    );
};

export default Wallet;