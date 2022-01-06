import axios from 'axios';

export const apiServer = axios.create({
    baseURL: 'https://api.hiskio.com/v2'
})

apiServer.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log('error: ', error);
        return Promise.reject(error);
    }
)

apiServer.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log('apiServer error: ', error)
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.log('token或驗證過期');
                    break
                case 404:
                    console.log("你要找的頁面不存在")
                    break
                case 500:
                    console.log("程式發生問題")
                    break
                default:
                    console.log(error.message)
            }
        } else {
            console.log('no response', __dirname);
        }
        if (!window.navigator.onLine) {
            alert("網路出了點問題，請重新連線後重整網頁");
            return;
        }
        return Promise.reject(error);
    }
)

import { 
    postAuthLogin,
    getMember,
    getFundraising,
    postCarts,
    delCarts,
} from "./carts.js";
// simplybook
export const apiAuthLogin = postAuthLogin;
export const apiGetMember = getMember;
export const apiGetFundraising = getFundraising;
export const apiPostCarts = postCarts;
export const apiDelCarts = delCarts;