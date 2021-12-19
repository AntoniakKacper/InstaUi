import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {store} from '../store';
import {RESET_AUTH} from "../store/types/types"

const baseURL = 'http://127.0.0.1:8000/api';

const axiosCustom = axios.create({
    baseURL: baseURL
})

axiosCustom.interceptors.request.use(function (req: AxiosRequestConfig) {
    req.headers!.authorization = `Bearer ${store.getState().auth.token}`;
    return req;
})

axiosCustom.interceptors.response.use(function (response :AxiosResponse) {return response;
}, function (error) {
    if(error.response.status === 401) {
        store.dispatch({type: RESET_AUTH});
    }
    return Promise.reject(error);
});

export default axiosCustom;