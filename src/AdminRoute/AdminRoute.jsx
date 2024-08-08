/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {

    const isAdmin = true
    
        // if(){
        //     return <span className="loading loading-spinner loading-lg"></span>
        // }
        if(isAdmin){
            return children
        }
        return <Navigate to='/adminLogin'></Navigate>
    };


export default AdminRoute;