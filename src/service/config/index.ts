import { getDataFromCookie } from "@data-service";
import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

request.interceptors.request.use((config)=>{
    const token = getDataFromCookie("access_token")

    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }

    return config
})

export default request