import { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const LiveChat = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className="mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="px-4 py-2 rounded-full bg-[#CB0881] text-white">
                    Live Chat
                </button>
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[230px] h-24 ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
                        <div className="flex items-center justify-center h-full gap-10 text-3xl">
                            <FaTelegram className="text-[#3470E4]"/>
                            <FaFacebookMessenger className="text-[#EA4B9D]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveChat;