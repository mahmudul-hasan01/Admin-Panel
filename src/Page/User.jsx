import { IoSearchSharp } from "react-icons/io5";
import UserEdit from "../Components/UserEdit";
import UserBalance from "../Components/UserBalance";
import { FaCircleDot } from "react-icons/fa6";


const User = () => {

    return (
        <div>
            {/* Text */}
            <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">All User</p>
            {/* Search and Dropdown */}
            <div className="flex justify-end items-center gap-2 py-10">
                {/* Search */}
                <div className="relative w-max rounded-full">
                    <input className="peer rounded-full border w-72 placeholder:text-white bg-[#CB0881] pl-12 py-1 text-white focus:outline-none" type="text" placeholder="Search" id="navigate_ui_input_33" />
                    <IoSearchSharp className="absolute top-2 left-4 text-white text-xl  " />
                </div>
                {/* Dropdown */}
                <div>
                    <select defaultValue={'June 2024'} className="px-6 py-1 rounded-lg border border-[#CB0881]">
                        <option disabled value="June 2024">June 2024</option>
                        <option value="June 2024">June 1990</option>
                        <option value="June 2024">June 2023</option>
                    </select>
                </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">

                <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  mt-6">
                    <thead>
                        <tr className="bg-[#CB0881] text-white">
                            <th className="py-3 px-6 text-center border border-[#CB084B]">User Id</th>
                            <th className="py-3 px-6 text-center border border-[#CB084B]">User Name</th>
                            <th className="py-3 px-6 text-center border border-[#CB084B]">User Status</th>
                            <th className="py-3 px-6  border border-[#CB084B] ">User Balance</th>
                            <th className="py-3 px-6  border border-[#CB084B]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300 font-semibold text-center">
                            <td className="py-4 px-6 border border-l-0 border-[#CB084B]">OTS19911</td>
                            <td className="py-4 px-6 border border-[#CB084B]">Piash Sharier</td>
                            <td className="py-4 px-6 border border-[#CB084B] "><FaCircleDot className="text-[#12C703] inline text-xl" /> Active</td>
                            <td className="py-4 px-6 border border-[#CB084B]">$10000</td>
                            <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end flex gap-2 justify-center">
                                <UserEdit />
                                <UserBalance />
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition duration-300 font-semibold text-center">
                            <td className="py-4 px-6 border border-l-0 border-[#CB084B]">OTS19911</td>
                            <td className="py-4 px-6 border border-[#CB084B]">Piash Sharier</td>
                            <td className="py-4 px-6 border border-[#CB084B] "><FaCircleDot className="text-[#F81212] inline text-xl" /> Disable</td>
                            <td className="py-4 px-6 border border-[#CB084B]">$10000</td>
                            <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end flex gap-2 justify-center">
                                <UserEdit />
                                <UserBalance />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;