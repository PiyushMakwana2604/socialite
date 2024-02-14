import AxiosClientApi from "./AuthService";
import AxiosClientApiImage from "./AuthserviceImage";

/*==================================================== 
    Auth Routers                                                                              
====================================================== */

export function registerApi(request) {
    return AxiosClientApi.post('v1/user-auth/register', request)
}

export function otpVerificationApi(request) {
    return AxiosClientApi.post('v1/user-auth/otp-verification', request)
}

export function loginApi(request) {
    return AxiosClientApi.post('v1/user-auth/login', request)
}