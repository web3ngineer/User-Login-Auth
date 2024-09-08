import axios from "axios";
import { BASE_URL } from "../constant";

const axiosInstance = axios.create({
    baseURL: BASE_URL, 
    withCredentials: true, 
    headers: {
        "Content-Type": "application/json", 
    }
});

// axiosInstance.defaults.baseURL = "http://localhost:7000";
// axiosInstance.defaults.withCredentials = true;
// axiosInstance.defaults.headers = { "Content-Type": "application/json" }

export default axiosInstance;