import {axiosInstance} from '../utilities/axiosInstance';
const url = "https://srinivas-loan-management.herokuapp.com/";

const login = async (email, password) => {
    return await axiosInstance.post(url + 'login', {
        email,
        password
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const register = async (username, email, number, password, address) => {
    return await axiosInstance.post(url + 'signup', {
        email,
        password,
        username,
        number,
        address
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const logout = async () => {
    return await axiosInstance.get(url + 'logout').then((response) => {
        return response.data
    })
}

export { login, register, logout }
