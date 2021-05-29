const { validateEmail, validatePassword, validateNumber, validateAmount, validateDate, validateEmi } = require('./validation');

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

const handleAmountChange = (amount, setAmount, setErrors) => {
    handleChange(amount, setAmount);
    if(!validateAmount(amount)){
        return setErrors(prev => ({
            ...prev,
            amount: 'Loan below 10000 cannot be processed'
        }))
    }else{
        setErrors(prev => ({
            ...prev,
            amount: ''
        }))
    }
}

const handleDateChange = (date, setDate, setErrors) => {
    handleChange(date, setDate);
    if(!validateDate(date)){
        return setErrors(prev => ({
            ...prev,
            date: 'You cannot enter a past date'
        }))
    }else{
        setErrors(prev => ({
            ...prev,
            date: ''
        }))
    }
}

const handleEmiChange = (emi, setEmi, setErrors) => {
    handleChange(emi, setEmi);
    if(!validateEmi(emi)){
        return setErrors(prev => ({
            ...prev,
            emi: 'EMI Should be positive value'
        }))
    }else{
        setErrors(prev => ({
            ...prev,
            emi: ''
        }))
    }
}

export { handleEmailChange, handlePasswordChange, 
    handleChange, handleNumberChange, handleAmountChange, handleDateChange, handleEmiChange }