import EditMessage from "../Components/EditMessage";
import WriteMessage from "../Components/WriteMessage";

const Subscribers = () => {
    return (
        <div className="space-y-12">
            <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">Subcribers</p>
            {/* Table */}
            <div className="overflow-x-auto bg-[#FCEEF8] rounded-xl">
                <div className="flex justify-between pt-5 px-5">
                    <p className="text-[18px] font-bold text-[#CB0881] flex items-center">Trade Shedule</p>
                    <button className="px-4 py-2 rounded-full bg-[#CB0881] text-white">Download</button>
                </div>
                <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  mt-6">
                    <thead>
                        <tr className="bg-[#CB0881] text-white">
                            <th className="py-3 px-6 text-left border border-[#CB084B]"># SI</th>
                            <th className="py-3 px-6 text-left border border-[#CB084B]">Email</th>
                            <th className="py-3 px-6 text-left border border-[#CB084B]">Contact</th>
                            <th className="py-3 px-6  border border-[#CB084B] ">Subscriber Id</th>
                            <th className="py-3 px-6  border border-[#CB084B] ">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border border-l-0 border-[#CB084B]">1</td>
                            <td className="py-4 px-6 border border-[#CB084B]">admin@gmail.com</td>
                            <td className="py-4 px-6 border border-[#CB084B]">01917090220</td>
                            <td className="py-4 px-6 border border-[#CB084B]">011123</td>
                            <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end flex flex-col lg:flex-row gap-5 justify-center">
                                <WriteMessage />
                                <EditMessage />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscribers;