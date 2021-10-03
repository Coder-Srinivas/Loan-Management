const {axiosInstance} = require('../utilities/axiosInstance');

const createLoan = async (amount, emiDuration, startDate, fixed) => {
    return await axiosInstance.post('new/loan', {
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
    return await axiosInstance.get('loans').then((response) => {
        return response.data;
    }).catch((error) => {
        return error.response.data;
    });
}

export { createLoan, getLoans }
