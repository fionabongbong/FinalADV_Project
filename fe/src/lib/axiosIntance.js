import axios from "axios";
import cookie from "cookiejs";

export const axiosAuthInstance = axios.create({
    timeout: 3000,
    headers: headerOptions()
})

export const setAxiosInstanceToken = (token) => {
    axiosAuthInstance.defaults.headers['Authorization'] = `Token ${token}`;
}

function headerOptions(){
    if(typeof window === "undefined"){
        return {}
    }
    return {
        Authorization: cookie.get('token') ? `Token ${cookie.get('token')}` : null,
    }
}