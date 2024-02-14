



// import axios from "axios";
// import CryptoJS from 'crypto-js';
// import { useNavigate } from 'react-router-dom';
// import { logOutRedirectCall, loginRedirectCall } from '../utils/Common';

// const key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_KEY);
// const iv = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV);

// // const showMessage = (msg) => {
// //   console.log("Message : ", msg)
// // }


// const axiosClient = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
//     headers: {
//         'api-key': process.env.REACT_APP_API_KEY,
//         'Accept-Language': 'en',
//         'is-admin': '1',
//         'Content-Type': 'text/plain'
//     }
// });

// // Body Encryption Request to API
// axiosClient.interceptors.request.use(function (request) {

//     request.data = bodyEncryption(request.data, true)

//     if (sessionStorage.getItem("AdminToken") !== undefined || sessionStorage.getItem("AdminToken") !== null) {
//         request.headers['token'] = bodyEncryption(sessionStorage.getItem("AdminToken"))
//     }
//     console.log("Final Request", request.data);
//     return request;
// });

// axiosClient.interceptors.response.use(
//     function (response) {
//         response = bodyDecryption(response.data);

//         let respData = JSON.parse(response);

//         if (respData.code === -1) {
//             console.log("----------------- (-1) ----------------------")

//             // const navigate = useNavigate();
//             logOutRedirectCall();
//             loginRedirectCall();
//             // navigate('/logout');
//         }
//         // else if (respData.code === 0) {
//         //     Common.ErrorAlert(respData.message);
//         //     return;
//         // }
//         else {
//             return respData;
//         }
//     },

//     function (error) {
//         let res = error.response;
//         console.log("Decrypt Data else response", res)
//         if (res.status === 401) {
//             console.log("----------------- 401 ----------------------")
//             // const navigate = useNavigate();
//             logOutRedirectCall();
//             loginRedirectCall();
//             // navigate("/");
//             // navigate('/logout');
//         } else if (res.status === 400) {
//             const response = bodyDecryption(res.data);
//             return response
//         } else {
//             console.error("Looks like there was a problem. Status Code: " + res.status);
//             return Promise.reject(error);
//         }
//     }
// );

// // function bodyEncryption(request, isStringify) {
// //     console.log("Encryption Request", request)

// //     let new_request = (isStringify) ? JSON.stringify(request) : request;
// //     let encrypted = CryptoJS.AES.encrypt(new_request, key, { iv: iv });

// //     return encrypted.toString();
// // }
// export const bodyEncryption = (request, isStringify) => {
//     try {
//         let new_request = (isStringify) ? JSON.stringify(request) : request;
//         console.log('new_request: ', new_request);
//         // const encryptedData = CryptoJS.AES.encrypt(new_request, SECRET, { iv: IV }).toString();
//         // console.log('Encrypted data: ', encryptedData);
//         // return encryptedData;
//     } catch (error) {
//         console.log('Encryption error: ', error);
//         return '';
//     }
// };

// function bodyDecryption(request) {
//     let decrypted = CryptoJS.AES.decrypt(request.toString(), key, { iv: iv });
//     console.log("Decrypt Data", decrypted.toString(CryptoJS.enc.Utf8))

//     return decrypted.toString(CryptoJS.enc.Utf8);
// }

// export { axiosClient };