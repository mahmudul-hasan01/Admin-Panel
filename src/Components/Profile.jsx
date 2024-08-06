import { IoMdNotificationsOutline } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

const Profile = () => {
    return (
        <div className="flex items-center gap-3 pr-10">
            <IoMdNotificationsOutline className="text-2xl"/>
            <div className="flex items-center gap-2">
                <img
                    width={500}
                    height={500}
                    className="size-10 rounded-full bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
                <div>
                    <h1>MD. Mahmudul Hasan</h1>
                    <h2 className="text-[#CB087D] font-semibold">Admin</h2>
                </div>
                <TiArrowSortedDown className="text-xl"/>
            </div>
        </div>
    );
};

export default Profile;