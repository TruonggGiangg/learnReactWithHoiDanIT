import axios from "./axios.customine";

export const createUser = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}

export const fetchAllUserAPI = () => {
    const URL_BACKEND = '/api/v1/user';

    return axios.get(URL_BACKEND);
}