import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { LuLogOut } from "react-icons/lu";
import Profile from "../Components/Profile";
import logo from "../assets/Logo.png"
import logos from "../assets/short-logo.png"

const AdminPanel = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 border-r-2 shadow-xl flex flex-col py-10 gap-10">
                <div className="flex  items-center pl-4 md:pl-8 lg:pl-10">
                    <img className="hidden lg:block" src={logo} alt="" />
                    <img className="lg:hidden" src={logos} alt="" />
                </div>
                <SideBar />
                <button className="pl-10 text-start text-[#CB087D] font-semibold lg:flex items-center gap-2 hidden "><LuLogOut className="text-xl" /> Logout</button>
                <button className="pl-7 md:pl-12 text-start text-[#CB087D] font-semibold flex items-center gap-2 lg:hidden"><LuLogOut className="text-xl" /></button>
            </div>
            <div className="col-span-10">
                <div className="h-28 border-b-2 flex items-center justify-end">
                    <Profile />
                </div>
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;