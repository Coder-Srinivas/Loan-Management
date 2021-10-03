const {axiosInstance} = require('../utilities/axiosInstance');

const login = async (email, password) => {
    return await axiosInstance.post('login', {
        email,
        password
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const register = async (username, email, number, password, address) => {
    return await axiosInstance.post('signup', {
        email,
        password,
        username,
        number,
        address
    }).then((response) => {
        console.log(response)
        return response.data;
    }).catch((error) => {
        if(error.response){
            return error.response.data;
        }else return {
            message: "Try again"
        }
    });
}

const logout = async () => {
    return await axiosInstance.get('logout').then((response) => {
        return response.data
    })
}

export { login, register, logout }
