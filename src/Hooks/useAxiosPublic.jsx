import axios from "axios";

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        // baseURL: 'http://localhost:5000'
        // baseURL: 'https://admin-backend-self.vercel.app'
        baseURL: 'https://oriontrading-backend.onrender.com/api/v1'
    })
    return axiosPublic
};

export default useAxiosPublic;