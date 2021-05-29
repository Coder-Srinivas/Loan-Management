const axiosInstance = require('../utilities/axiosInstance');
const url = process.env.BACKEND_URL || "https://srinivas-loan-management.herokuapp.com/";

const createLoan = async (amount, emiDuration, startDate, fixed) => {
    return await axiosInstance.post(url + 'new/loan', {
        amount,
        emiDuration,
        startDate,
        fixed
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const getLoans = async () => {
    return await axiosInstance.get(url + 'loans').then((response) => {
        return response.data;
    }).catch((error) => {
        return error.response.data;
    });
}

module.exports = { createLoan, getLoans }
