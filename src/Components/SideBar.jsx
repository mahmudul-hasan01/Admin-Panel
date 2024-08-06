import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TbUsersPlus } from "react-icons/tb";
import { FaUserGear } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { BsPostcard } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";

const SideBar = () => {
    return (
        <div>
            {/* Large device */}
            <div className="lg:flex flex-col gap-2 font-semibold hidden ">

                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875] py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white pl-10 flex items-center gap-2"
                    }
                >
                    <RxDashboard className="text-xl" />  Dashboard
                </NavLink>

                <NavLink
                    to="/user"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875] l py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white pl-10 flex items-center gap-2"
                    }
                >
                    <FaRegUser className="text-xl" /> User
                </NavLink>

                <NavLink
                    to="/trade"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <GrLineChart className="text-xl" />  Trade
                </NavLink>

                <NavLink
                    to="/wallet"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <RiExchangeDollarFill className="text-xl" /> Wallet
                </NavLink>

                <NavLink
                    to="/referral"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <TbUsersPlus className="text-xl" />  Referral
                </NavLink>

                <NavLink
                    to="/kyc"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <FaUserGear className="text-xl" /> KYC
                </NavLink>

                <NavLink
                    to="/subscribers"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <FaRegFile className="text-xl" />   Subscribers
                </NavLink>

                <NavLink
                    to="/RolesAndStaffs"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <BsFileEarmarkPerson className="text-xl" />  Roles & Staffs
                </NavLink>

                <NavLink
                    to="/supports"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <BsPostcard className="text-xl" /> Supports
                </NavLink>

                <NavLink
                    to="/secutiry"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <AiOutlineFileProtect className="text-xl" /> Secutiry
                </NavLink>

                <NavLink
                    to="/faq"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-10 flex items-center gap-2"
                    }
                >
                    <BsQuestionSquare className="text-xl" /> FAQ
                </NavLink>

            </div>

            {/* Small device */}
            <div className="flex flex-col gap-2 font-semibold lg:hidden ">

                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875] py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white pl-6 md:pl-12 lg:pl-8  flex items-center gap-2"
                    }
                >
                    <RxDashboard className="text-xl" />
                </NavLink>

                <NavLink
                    to="/user"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875] l py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <FaRegUser className="text-xl" />
                </NavLink>

                <NavLink
                    to="/trade"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <GrLineChart className="text-xl" />
                </NavLink>

                <NavLink
                    to="/wallet"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <RiExchangeDollarFill className="text-xl" />
                </NavLink>

                <NavLink
                    to="/referral"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <TbUsersPlus className="text-xl" />
                </NavLink>

                <NavLink
                    to="/kyc"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <FaUserGear className="text-xl" />
                </NavLink>

                <NavLink
                    to="/subscribers"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <FaRegFile className="text-xl" />
                </NavLink>

                <NavLink
                    to="/RolesAndStaffs"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <BsFileEarmarkPerson className="text-xl" />
                </NavLink>

                <NavLink
                    to="/supports"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <BsPostcard className="text-xl" />
                </NavLink>

                <NavLink
                    to="/secutiry"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 md:pl-12 lg:pl-8 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <AiOutlineFileProtect className="text-xl" />
                </NavLink>

                <NavLink
                    to="/faq"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "border border-l-0 border-r-0 border-[#CB087D] bg-[#f1b2d875]  py-2 text-[#CB087D] pl-6 lg:pl-10 flex items-center gap-2" : "text-[#CB087D] py-2 border border-l-0 border-r-0 border-white  pl-6 md:pl-12 lg:pl-8 flex items-center gap-2"
                    }
                >
                    <BsQuestionSquare className="text-xl" />
                </NavLink>

            </div>
        </div>
    );
};

export default SideBar;