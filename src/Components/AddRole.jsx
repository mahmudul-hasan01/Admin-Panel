import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const AddRole = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className="mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="px-3 py-2 rounded-full bg-[#CB0881] text-white">
                    + Add New Role
                </button>
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
                        {/* input */}
                        <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
                            <div className="flex justify-between">
                                <h1 className="pb-8 text-3xl text-start text-[#CB087D]">Add Role</h1>
                                <IoCloseSharp onClick={() => setOpenModal(false)} className="mx-auto mr-0 text-4xl cursor-pointer text-[#CB087D]" />
                            </div>
                            <div className="space-y-5">
                                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-start" htmlFor="_email">
                                        Select Roles
                                    </label>
                                    <input className="rounded-lg border w-full border-[#CB087D] bg-transparent px-4 py-2 text-[#CB087D] focus:outline-none" type="text" />
                                </div>
                            </div>

                            {/* checkbox */}
                            <div className="mt-8 grid grid-cols-2">
                                {/* 1111 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>User</p>
                                </div>
                                {/* 22222 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Subscribers</p>
                                </div>
                                {/* 33333 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Deposite</p>
                                </div>
                                {/* 44444 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Trade</p>
                                </div>
                                {/* 55555 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Transaction</p>
                                </div>
                                {/* 66666 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Request Money</p>
                                </div>
                                {/* 77777 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>payment settings</p>
                                </div>
                                {/* 88888 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>KYC Management</p>
                                </div>
                                {/* 9 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Roles and Staff</p>
                                </div>
                                {/* 10 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Support</p>
                                </div>
                                {/* 11 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Referral</p>
                                </div>
                                {/* 12 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Security</p>
                                </div>
                                {/* 13 */}
                                <div className="flex gap-2 items-center font-semibold">
                                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-[#CB0881]">
                                        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-[#e7cfde]"></div>
                                        <div className="z-20 size-4 rounded-full bg-[#CB0881] duration-200 peer-checked/toggle:translate-x-6"></div>
                                    </label>
                                    <p>Withdraw</p>
                                </div>
                            </div>
                            <div className="flex justify-center gap-4">
                                <button type="button" className="py-2 w-full rounded-full mt-6 bg-[#12C703] text-white drop-shadow-lg ">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRole;