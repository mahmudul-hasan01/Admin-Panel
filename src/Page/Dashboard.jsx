import { GiMoneyStack } from "react-icons/gi";
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {

    const axiosPublic = useAxiosPublic()

    // all-balance
    const { data: allBalance = [] } = useQuery({
        queryKey: ['all/balance'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/all/balance`)
            return info?.data
        }
    })

    // pending-withdraw
    const { data, refetch } = useQuery({
        queryKey: ['pending/withdraw'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/pending/withdraw`)
            return info?.data
        }
    })
    
    // pending-kyc 
    const { data: kyc = [] } = useQuery({
        queryKey: ['pending/kyc'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/user/pending/kyc`)
            return info?.data
        }
    })

    // approve-withdraw
    const handleApprovedWithdraw = async (id) => {
        try {
            const info = await axiosPublic.patch(`/approved/${id}`, { approved: 'Approved' })
            console.log(info.data);
            refetch()
        } catch (err) {
            console.log(err);
        }
    }
    // approve-kyc
    const handleApprovedKyc = async (id) => {
        try {
            const info = await axiosPublic.put(`/admin/update/kyc`, { id:id, kyc: 'Approved' })
            console.log(info.data);
            refetch()
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {/* Info */}
            <div className="flex gap-4 pl-[250px] md:pl-0 justify-center overflow-x-auto">
                <div className="w-56 h-44 border border-[#CB0881] rounded-3xl p-4 space-y-2">
                    <GiMoneyStack className="text-6xl text-[#3470E4]" />
                    <p className="text-xl text-[#CB0881] font-bold">${allBalance?.totalBalance}</p>
                    <p className="text-xl font-semibold">Total Balance</p>
                </div>
                <div className="w-56 h-44 border border-[#CB0881] rounded-3xl p-4 space-y-2">
                    <FaFileCirclePlus className="text-6xl text-[#12C703]" />
                    <p className="text-xl text-[#CB0881] font-bold">${allBalance?.depositAmount}</p>
                    <p className="text-xl font-semibold">Total Deposit</p>
                </div>
                <div className="w-56 h-44 border border-[#CB0881] rounded-3xl p-4 space-y-2">
                    <RiExchangeDollarLine className="text-6xl text-[#CB084B]" />
                    <p className="text-xl text-[#CB0881] font-bold">${allBalance?.withdrawAmount}</p>
                    <p className="text-xl font-semibold">Total Withdraw</p>
                </div>
                <div className="w-56 h-44 border border-[#CB0881] rounded-3xl p-4 space-y-2">
                    <FaUserGroup className="text-6xl text-[#E19202]" />
                    <p className="text-xl text-[#CB0881] font-bold">$0</p>
                    <p className="text-xl font-semibold">Referral Earnings</p>
                </div>
            </div>
            {/* Table */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
                {/* Table 1 */}
                <div className="overflow-x-auto bg-[#FCEEF8] rounded-xl">
                    <div>
                        <p className="text-[18px] font-bold text-[#CB0881] flex items-center pt-5 pl-5">Pending Withdraw</p>
                    </div>
                    <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  mt-6">
                        <thead>
                            <tr className="bg-[#CB0881] text-white">
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Serial</th>
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Name</th>
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Amount</th>
                                <th className="py-3 px-6  border border-[#CB084B] ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.withdraw?.map((item, i) => (
                                    <tr key={item._id} className="hover:bg-gray-50 transition duration-300">
                                        <td className="py-4 px-6 border border-l-0 border-[#CB084B]">{i + 1}</td>
                                        <td className="py-4 px-6 border border-[#CB084B]">{item?.user?.name}</td>
                                        <td className="py-4 px-6 border border-[#CB084B]">${item.amount}</td>
                                        <td className="py-7 px-6 border border-r-0 border-[#CB084B] text-end flex items-center gap-2">
                                            <button onClick={() => handleApprovedWithdraw(item._id)} className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                            <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Pending</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                {/* Table 2*/}
                <div className="overflow-x-auto bg-[#FCEEF8] rounded-xl">
                    <div>
                        <p className="text-[18px] font-bold text-[#CB0881] flex items-center pt-5 pl-5">Pending KYC</p>
                    </div>
                    <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  mt-6">
                        <thead>
                            <tr className="bg-[#CB0881] text-white">
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Serial</th>
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Name</th>
                                <th className="py-3 px-6  border border-[#CB084B] ">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                kyc?.kyc?.map((item, i) => (
                                    <tr key={item._id} className="hover:bg-gray-50 transition duration-300">
                                        <td className="py-4 px-6 border border-l-0 border-[#CB084B]">{i + 1}</td>
                                        <td className="py-4 px-6 border border-[#CB084B]">{item?.user?.name}</td>
                                        <td className="py-7 px-6 border border-r-0 border-[#CB084B] text-end flex items-center gap-2">
                                            <button onClick={() => handleApprovedKyc(item._id)} className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                            <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Pending</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;