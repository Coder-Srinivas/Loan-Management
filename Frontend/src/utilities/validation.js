const validator = require('validator');

const validatePassword = (password) => {
    return validator.isStrongPassword(password, {minLength: 4})
}

const validateEmail = (email) => {
    return validator.isEmail(email);
}

const validateNumber = (number) => {
    return number.length === 10;
}

module.exports = { validateEmail, validatePassword, validateNumber }