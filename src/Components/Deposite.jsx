/* eslint-disable react/prop-types */
import { IoSearchSharp } from 'react-icons/io5';

const Deposite = ({ filteredDeposite, handleDepositeApproved }) => {

    return (
        <div>
            <div className="py-10 space-y-10">
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-80 md:w-40 lg:w-60 xl:w-80 h-[75px]  bg-[#FCEEF8] pl-6 pt-2 rounded-xl">
                        <p className="font-semibold text-[#12C703]">Paid</p>
                        {
                            filteredDeposite?.map(item => (
                                item.status === "Paid" ? <p key={item._id} className=" font-bold text-xl">USD ${item.amount}</p>
                                    :
                                    <p key={item._id} className=" font-bold text-xl">USD $0</p>
                            ))
                        }
                    </div>
                    <div className="w-80 md:w-40 lg:w-60 xl:w-80 h-[75px]  bg-[#FCEEF8] pl-6 pt-2 rounded-xl">
                        <p className="font-semibold text-[#E19202]">Pending</p>
                        {
                            filteredDeposite?.map(item => (
                                item.status === "Pending" ? <p key={item._id} className=" font-bold text-xl">USD ${item.amount}</p>
                                    :
                                    <p key={item._id} className=" font-bold text-xl">USD $0</p>
                            ))
                        }

                    </div>
                    <div className="w-80 md:w-40 lg:w-60 xl:w-80 h-[75px]  bg-[#FCEEF8] pl-6 pt-2 rounded-xl">
                        <p className="font-semibold text-[#F81212]">Rejected</p>
                        {
                            filteredDeposite?.map(item => (
                                item.status === "Rejected" ? <p key={item._id} className=" font-bold text-xl">USD ${item.amount}</p>
                                    :
                                    <p key={item._id} className=" font-bold text-xl">USD $0</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Text */}
            <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">All Deposite History</p>
            {/* Search */}
            <div className="flex justify-end items-center gap-2 py-10">
                <div className="relative w-max rounded-full">
                    <input className="peer rounded-full border w-60 placeholder:text-white bg-[#CB0881] pl-12 py-1 text-white focus:outline-none" type="text" placeholder="Search" id="navigate_ui_input_33" />
                    <IoSearchSharp className="absolute top-2 left-4 text-white text-xl  " />
                </div>
            </div>
            {/* All Deposite History */}
            <div className="space-y-5 overflow-x-auto">
                {
                    filteredDeposite?.map(item => (
                        <div key={item._id} className="flex justify-around pt-5 w-[700px] lg:w-full h-32 bg-[#FCEEF8] rounded-2xl font-semibold ">
                            <div className="flex flex-col items-center">
                                <p>{item.user.reffer}</p>
                                <button onClick={() => handleDepositeApproved(item._id)} type="button" className={`py-2 px-4 rounded-full mt-6 ${item.status === 'Paid' && 'bg-[#12C703]'} ${item.status === "Rejected" && 'bg-[#F81212]'} ${item.status === "Pending" && 'bg-[#E19202]'} text-white drop-shadow-lg font-normal`}>
                                    {item.status}
                                </button>
                            </div>
                            <div>
                                <p>USD ${item.amount}</p>
                            </div>
                            <div>
                                <p>{item?.createdAt?.split('T')[0]}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p>{item?.createdAt?.split('T')[1].split('.')[0]}</p>
                                {/* <p>06 : 00 AM</p> */}
                                <button type="button" className="py-2 px-4 rounded-full mt-6 bg-[#3470E4] text-white drop-shadow-lg  font-normal">
                                    View User
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Deposite;