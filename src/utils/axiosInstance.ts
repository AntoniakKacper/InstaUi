import axios, {AxiosRequestConfig} from 'axios';
import {store} from '../store';

const baseURL = 'http://127.0.0.1:8000/api';

const axiosCustom = axios.create({
    baseURL: baseURL
})

axiosCustom.interceptors.request.use(function (req: AxiosRequestConfig) {
    req.headers!.authorization = `Bearer ${store.getState().auth.token}`;
    console.log(store.getState().auth.token);
    return req;
})

export default axiosCustom;