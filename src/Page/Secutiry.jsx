
const Secutiry = () => {
    return (
        <div>
            {/* Required Accout Fields */}
            <div>
                <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">Required Accout Fields</p>
                <div className="flex flex-wrap gap-4 mt-6 w-3/5 font-semibold">
                    <div className="bg-[#CB0881] h-12 flex items-center justify-center text-white px-8 rounded-lg">
                        <h1>Name</h1>
                    </div>
                    <div className="bg-[#CB0881] h-10 flex items-center justify-center text-white px-8 rounded-lg">
                        <h1>Address</h1>
                    </div>
                    <div className="bg-[#CB0881] h-10 flex items-center justify-center text-white px-8 rounded-lg">
                        <h1>Phone</h1>
                    </div>
                    <div className="bg-[#CB0881] h-10 flex items-center justify-center text-white px-8 rounded-lg">
                        <h1>Email</h1>
                    </div>
                    <div className="bg-[#CB0881] h-10 flex items-center justify-center text-white px-8 rounded-lg">
                        <h1>City</h1>
                    </div>
                    <div className="bg-[#CB0881] h-10 flex items-center justify-center text-white px-8 rounded-lg">
                        <h1>Username</h1>
                    </div>
                    <div className="bg-[#CB0881] h-10 flex items-center justify-center text-white px-8 rounded-lg">
                        <h1>Password</h1>
                    </div>
                    <div className="bg-[#CB0881] h-10 flex items-center justify-center text-white px-8 rounded-lg">
                        <h1>Country</h1>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 rounded-full bg-[#3470E4] text-white">+ Add Fields </button>
                </div>
            </div>
            {/* User Security */}
            <div>
                <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">User Security</p>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    <div>
                        <label className="block font-medium text-start mb-1" htmlFor="_email">
                            Strong Password
                        </label>
                        <select className="w-72 md:w-96 lg:w-80 xl: h-12 border border-black rounded-xl">
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-start mb-1" htmlFor="_email">
                            Deposit
                        </label>
                        <select className="w-72 md:w-96 lg:w-80 h-12 border border-black rounded-xl">
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-start mb-1" htmlFor="_email">
                            Registration
                        </label>
                        <select className="w-72 md:w-96 lg:w-80 h-12 border border-black rounded-xl">
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-start mb-1" htmlFor="_email">
                            Email
                        </label>
                        <select className="w-72 md:w-96 lg:w-80 h-12 border border-black rounded-xl">
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-start mb-1" htmlFor="_email">
                            Withdraw
                        </label>
                        <select className="w-72 md:w-96 lg:w-80 h-12 border border-black rounded-xl">
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-start mb-1" htmlFor="_email">
                            Phone
                        </label>
                        <select className="w-72 md:w-96 lg:w-80 h-12 border border-black rounded-xl">
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-start mb-1" htmlFor="_email">
                            OTP
                        </label>
                        <select className="w-72 md:w-96 lg:w-80 h-12 border border-black rounded-xl">
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end gap-5 mt-4">
                    <button className="px-4 py-2 rounded-full bg-[#3470E4] text-white">+ Add </button>
                    <button className="px-4 py-2 rounded-full bg-[#E19202] text-white">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Secutiry;