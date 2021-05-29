const { validateEmail, validatePassword, validateNumber } = require('./validation');

const handleChange = (value, setValue) => {
    setValue(value);
}

const handleEmailChange = (email, setEmail, setErrors) => {
    handleChange(email, setEmail);
    if(!validateEmail(email)){
        return setErrors(prev => ({
            ...prev,
            email: 'Please enter a valid email.'
        }));
    }else{
        setErrors(prev => ({
            ...prev,
            email: ''
        }))
    }
}

const handlePasswordChange = (password, setPassword, setErrors) => {
    handleChange(password, setPassword);
    if(!validatePassword(password)){
        return setErrors(prev => ({
            ...prev,
            password: 'Password should contain at least 1 special character, 1 uppercase character, 1 lowercase character and 1 number.'
        }));
    }else{
        setErrors(prev => ({
            ...prev,
            password: ''
        }))
    }
}

const handleNumberChange = (number, setNumber, setErrors) => {
    handleChange(number, setNumber);
    if(!validateNumber(number)){
        return setErrors(prev => ({
            ...prev,
            number: 'Please enter a valid number'
        }))
    }else{
        setErrors(prev => ({
            ...prev,
            number: ''
        }))
    }
}

module.exports = { handleEmailChange, handlePasswordChange, handleChange, handleNumberChange }