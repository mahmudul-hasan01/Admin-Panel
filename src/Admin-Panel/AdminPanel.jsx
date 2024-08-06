import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { LuLogOut } from "react-icons/lu";
import Profile from "../Components/Profile";
const logo = 'https://s3-alpha-sig.figma.com/img/0de9/9329/80c63815bc7e14f474ec079b4fbf81fa?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4X2zIFdYY~HFEET6NoBsXfH-j3qsaCAGeymISEWNp2qF0MJxl7NruoUny-dAciS4NoA9bkOnrTBouEsJBFZEu851cNKQIgcsjuIhbJDEvJKH4IkWRl7R7uEXDfC8gZUbL4j8B1SJUDZueHDXr7f0li47Vf~8Riu-OAql546dvpt943eLNqZDM23~I4GSiMicqimZPcjyWSSfon2g3bubW6I0vgZobgFkc6IWg6EwtyzqxchzmTtNZgL9iC0lKUdvJYJ6a27qyW73TZNg544b0OAJI5dR10-BsjH1Fv0owp6fc172lhGt6gc-kZIasWfOLxfIXwj4~OSWwzRL4VuKw__'

const AdminPanel = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 border-r-2 shadow-xl flex flex-col py-10 gap-10">
                <div className="flex items-center pl-4 md:pl-8 lg:pl-10">
                    <img className="w-12 h-12" src={logo} alt="" />
                    <h1 className="text-[#CB087D] hidden lg:block text-xl font-bold ">Orion Trading System</h1>
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