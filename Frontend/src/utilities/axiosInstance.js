const axios = require('axios');
const url = process.env.BACKEND_URL || "http://localhost:8000/";
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: url
})

module.exports = axiosInstance;