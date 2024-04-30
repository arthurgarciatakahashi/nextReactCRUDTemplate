import { Environment } from '../../../environment';
import { errorInterceptor, responseInterceptor } from './interceptors';
import axios from "axios"

const Api = axios.create({
    baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export {Api};