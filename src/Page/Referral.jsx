import AddReferral from "../Components/AddReferral";

const Referral = () => {
    return (
        <div className="space-y-12">
            <div className="pt-5 px-5 space-y-3">
                <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">All Referrals</p>
                <div className="flex justify-end">
                    <AddReferral />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-[#FCEEF8] rounded-xl">
                <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  mt-6">
                    <thead>
                        <tr className="bg-[#CB0881] text-white">
                            <th className="py-3 px-6 text-center border border-[#CB084B]">Serial</th>
                            <th className="py-3 px-6 text-center border border-[#CB084B]">User</th>
                            <th className="py-3 px-6 text-center border border-[#CB084B]">Ref. Users</th>
                            <th className="py-3 px-6  border border-[#CB084B] ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 1111 */}
                        <tr className="hover:bg-gray-50 transition duration-300 text-center font-semibold">
                            <td className="py-4 px-6 border border-l-0 border-[#CB084B]">01</td>
                            <td className="py-4 px-6 border border-[#CB084B]">Razzak</td>
                            <td className="py-4 px-6 border border-[#CB084B] space-y-4">
                                <h1>1. Ratul</h1>
                                <h1>2. Piash</h1>
                                <h1>3. Koushik</h1>
                            </td>
                            <td className="py-4 px-6 border border-r-0 border-[#CB084B] space-y-4">
                                <div className="flex justify-center gap-5">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Decline</button>
                                </div>
                                <div className="flex justify-center gap-5">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Decline</button>
                                </div>
                                <div className="flex justify-center gap-5">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Decline</button>
                                </div>
                            </td>
                        </tr>
                        {/* 22222 */}
                        <tr className="hover:bg-gray-50 transition duration-300 text-center font-semibold">
                            <td className="py-4 px-6 border border-l-0 border-[#CB084B]">01</td>
                            <td className="py-4 px-6 border border-[#CB084B]">Razzak</td>
                            <td className="py-4 px-6 border border-[#CB084B] space-y-4">
                                <h1>1. Ratul</h1>
                                <h1>2. Piash</h1>
                                <h1>3. Koushik</h1>
                            </td>
                            <td className="py-4 px-6 border border-r-0 border-[#CB084B] space-y-4">
                                <div className="flex justify-center gap-5">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Decline</button>
                                </div>
                                <div className="flex justify-center gap-5">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Decline</button>
                                </div>
                                <div className="flex justify-center gap-5">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Decline</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Referral;