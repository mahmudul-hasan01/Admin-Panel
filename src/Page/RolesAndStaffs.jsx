import { IoSearchSharp } from "react-icons/io5";
import AddRole from "../Components/AddRole";
import AddNewStaff from "../Components/AddNewStaff";

const RolesAndStaffs = () => {
    return (
        <div className="space-y-20">
            {/* Manage Roles */}
            <div>
                {/* Text */}
                <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl mb-6">Manage Roles</p>
                <div className="overflow-x-auto bg-[#FCEEF8] rounded-xl">
                    <div className="flex w-[600px] lg:w-full justify-between pt-5 px-5">
                        <p className="text-[18px] font-bold text-[#CB0881] flex items-center">Roles</p>
                        {/* Search */}
                        <div className="relative w-max rounded-full">
                            <input className="peer rounded-full border w-32 placeholder:text-white bg-[#CB0881] pl-12 py-1 text-white focus:outline-none" type="text" placeholder="Search" id="navigate_ui_input_33" />
                            <IoSearchSharp className="absolute top-2 left-4 text-white text-xl  " />
                        </div>
                        <AddRole />
                    </div>
                    <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  mt-6">
                        <thead>
                            <tr className="bg-[#CB0881] text-white">
                                <th className="py-3 px-6 text-center border border-[#CB084B]">Name</th>
                                <th className="py-3 px-6 text-center border border-[#CB084B]">Pernission</th>
                                <th className="py-3 px-6  border border-[#CB084B] ">Options</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="flex justify-center w-[100%] py-6 text-xl font-semibold text-[#292929]">
                        <p>No data available in table</p>
                    </div>
                </div>
            </div>
            {/* Manage Staffs */}
            <div>
                <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl mb-6">Manage Staffs</p>
                <div className="overflow-x-auto bg-[#FCEEF8] rounded-xl">
                    <div className="flex w-[700px] lg:w-full justify-between pt-5 px-5">
                        <p className="text-[18px] font-bold text-[#CB0881] flex items-center">Roles</p>
                        {/* Search */}
                        <div className="relative w-max rounded-full">
                            <input className="peer rounded-full border w-32 placeholder:text-white bg-[#CB0881] pl-12 py-1 text-white focus:outline-none" type="text" placeholder="Search" id="navigate_ui_input_33" />
                            <IoSearchSharp className="absolute top-2 left-4 text-white text-xl  " />
                        </div>
                        <AddNewStaff />
                    </div>
                    <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  mt-6">
                        <thead>
                            <tr className="bg-[#CB0881] text-white">
                                <th className="py-3 px-6 text-center border border-[#CB084B]">Name</th>
                                <th className="py-3 px-6 text-center border border-[#CB084B]">Email</th>
                                <th className="py-3 px-6 text-center border border-[#CB084B]">Phone</th>
                                <th className="py-3 px-6 text-center border border-[#CB084B]">Role</th>
                                <th className="py-3 px-6  border border-[#CB084B] ">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="hover:bg-gray-50 transition duration-300 text-center">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">Shawon</td>
                                <td className="py-4 px-6 border border-[#CB084B]">Shawon@gmail.com</td>
                                <td className="py-4 px-6 border border-[#CB084B]">01819113932</td>
                                <td className="py-4 px-6 border border-[#CB084B]">No Role</td>
                                <td className="py-6 px-6 border border-r-0 border-[#CB084B] flex gap-1  items-center justify-center">
                                    <button className="px-4 py-1 rounded-full bg-[#12C703] text-white">Edit</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RolesAndStaffs;