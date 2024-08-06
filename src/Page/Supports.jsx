import AddTicket from "../Components/AddTicket";
import LiveChat from "../Components/LiveChat";

const Supports = () => {
    return (
        <div className="space-y-12">
            <div className="pt-5 px-5 space-y-3">
                <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">All Referrals</p>
                <div className="flex justify-end gap-5">
                    <LiveChat />
                    <AddTicket />
                </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto bg-[#FCEEF8] rounded-xl">
                <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  mt-6">
                    <thead>
                        <tr className="bg-[#CB0881] text-white">
                            <th className="py-3 px-6 text-center border border-[#CB084B]">Subject</th>
                            <th className="py-3 px-6 text-center border border-[#CB084B]">Attachment</th>
                            <th className="py-3 px-6 text-center border border-[#CB084B]">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300 text-center">
                            <td className="py-4 px-6 border border-l-0 border-[#CB084B]">For refer</td>
                            <td className="py-4 px-6 border border-[#CB084B]">Image</td>
                            <td className="py-4 px-6 border border-r-0 border-[#CB084B]">Hello, I want to .....</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition duration-300 text-center">
                            <td className="py-4 px-6 border border-l-0 border-[#CB084B]">For withdraw</td>
                            <td className="py-4 px-6 border border-[#CB084B]">Image</td>
                            <td className="py-4 px-6 border border-r-0 border-[#CB084B]">Hello, I want to .....</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Supports;