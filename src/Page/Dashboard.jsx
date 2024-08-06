import { GiMoneyStack } from "react-icons/gi";
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div>
            {/* Info */}
            <div className="flex gap-4 justify-center overflow-x-auto pl-20">
                <div className="w-56 h-44 border border-[#CB0881] rounded-3xl p-4 space-y-2">
                    <GiMoneyStack className="text-6xl text-[#3470E4]" />
                    <p className="text-xl text-[#CB0881] font-bold">$0</p>
                    <p className="text-xl font-semibold">Total Balance</p>
                </div>
                <div className="w-56 h-44 border border-[#CB0881] rounded-3xl p-4 space-y-2">
                    <FaFileCirclePlus className="text-6xl text-[#12C703]" />
                    <p className="text-xl text-[#CB0881] font-bold">$0</p>
                    <p className="text-xl font-semibold">Total Deposit</p>
                </div>
                <div className="w-56 h-44 border border-[#CB0881] rounded-3xl p-4 space-y-2">
                    <RiExchangeDollarLine className="text-6xl text-[#CB084B]" />
                    <p className="text-xl text-[#CB0881] font-bold">$0</p>
                    <p className="text-xl font-semibold">Total Withdraw</p>
                </div>
                <div className="w-56 h-44 border border-[#CB0881] rounded-3xl p-4 space-y-2">
                    <FaUserGroup className="text-6xl text-[#E19202]" />
                    <p className="text-xl text-[#CB0881] font-bold">$0</p>
                    <p className="text-xl font-semibold">Referral Earnings</p>
                </div>
            </div>
            {/* Table */}
            <div className="flex gap-4 justify-center mt-10">
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
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">01</td>
                                <td className="py-4 px-6 border border-[#CB084B]">Razzak</td>
                                <td className="py-4 px-6 border border-[#CB084B]">&1100</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end space-x-2">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Pending</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">02</td>
                                <td className="py-4 px-6 border border-[#CB084B]">Razzak</td>
                                <td className="py-4 px-6 border border-[#CB084B]">&1100</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end space-x-2">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Pending</button>
                                </td>
                            </tr>

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
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">01</td>
                                <td className="py-4 px-6 border border-[#CB084B]">Razzak</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end space-x-2">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Pending</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">02</td>
                                <td className="py-4 px-6 border border-[#CB084B]">Razzak</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end space-x-2">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Pending</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;