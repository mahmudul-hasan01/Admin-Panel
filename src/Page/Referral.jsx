import { useQuery } from "@tanstack/react-query";
import AddReferral from "../Components/AddReferral";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Referral = () => {

    const axiosPublic = useAxiosPublic()

    const { data, refetch } = useQuery({
        queryKey: ['refers'],
        queryFn: async () => {
            const info = await axiosPublic.get(`/refers`)
            return info?.data
        }
    })

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
                        {
                            data?.map((item, i) => (
                                <tr key={item._id} className="hover:bg-gray-50 transition duration-300 text-center font-semibold">
                                    <td className="py-4 px-6 border border-l-0 border-[#CB084B]">{i + 1}</td>
                                    <td className="py-4 px-6 border border-[#CB084B]">{item.name}</td>
                                    <td className="py-4 px-6 border border-[#CB084B] space-y-4">
                                        {
                                            item?.refer.map((name, i) => <h1 key={i}>{i + 1}. {item.status === 'Pending' && name}</h1>)
                                        }
                                    </td>
                                    <td className="py-4 px-6 border border-r-0 border-[#CB084B] space-y-4">
                                        {
                                            item?.refer.map((i) => (
                                                <div key={i} className="flex justify-center gap-5">
                                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Approve</button>
                                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Decline</button>
                                                </div>
                                            ))
                                        }
                                    </td>
                                </tr>
                            ))
                        }

                        {/* 22222 */}
                        {/* <tr className="hover:bg-gray-50 transition duration-300 text-center font-semibold">
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
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Referral;