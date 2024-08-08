import { createBrowserRouter } from "react-router-dom";
import AdminPanel from "../Admin-Panel/AdminPanel";
import User from "../Page/User";
import Trade from "../Page/Trade";
import Wallet from "../Page/Wallet";
import Referral from "../Page/Referral"
import Subscribers from "../Page/Subscribers";
import RolesAndStaffs from "../Page/RolesAndStaffs";
import Supports from "../Page/Supports";
import Secutiry from "../Page/Secutiry";
import Faq from "../Page/Faq";
import Kyc from "../Page/Kyc";
import Dashboard from "../Page/Dashboard";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminRoute from "../AdminRoute/AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminRoute> <AdminPanel /> </AdminRoute>,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/user',
                element: <User />
            },
            {
                path: '/trade',
                element: <Trade />
            },
            {
                path: '/wallet',
                element: <Wallet />
            },
            {
                path: '/referral',
                element: <Referral />
            },
            {
                path: '/kyc',
                element: <Kyc />
            },
            {
                path: '/subscribers',
                element: <Subscribers />
            },
            {
                path: '/rolesAndStaffs',
                element: <RolesAndStaffs />
            },
            {
                path: '/supports',
                element: <Supports />
            },
            {
                path: '/secutiry',
                element: <Secutiry />
            },
            {
                path: '/faq',
                element: <Faq />
            },
        ]
    },
    {
        path: '/adminLogin',
        element: <AdminLogin />
    },
]);