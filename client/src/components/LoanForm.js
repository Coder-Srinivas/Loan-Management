import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';

import { createLoan } from '../services/loan.service';
import { handleChange, handleAmountChange, handleDateChange, handleEmiChange } from '../utilities/handleChanges';

const LoanForm = () => {

    let history = useHistory();
    const [amount, setAmount] = useState('');
    const [start, setStart] = useState('');
    const [emi, setEmi] = useState('');
    const [loading, setLoading] = useState(false);
    const [fixed, setFixed] = useState('');

    const [errors, setErrors] = useState({
        amount: '',
        date: '',
        emi: '',
        form: ''
    })
    const data = [
        {
            type: "number",
            min: "0",
            title: "Loan Amount",
            placeholder: "Enter the Loan amount", 
            onChange: (value) => {handleAmountChange(value, setAmount, setErrors)}, 
            icon: '',
            error: errors.amount
        },
        {
            type: "date",
            title: "Start Date",
            placeholder: "Enter Loan start date", 
            onChange: (value) => {handleDateChange(value, setStart, setErrors)}, 
            icon: '',
            error: errors.date
        },
        {
            type: "number",
            min: "0",
            title: "Monthly installments",
            placeholder: "Enter your preferred monthly installment", 
            onChange: (value) => {handleEmiChange(value, setEmi, setErrors)}, 
            icon: '',
            error: errors.emi
        },
        {
            type: "radio",
            name: "loanType",
            title: "Fixed",
            placeholder: "Fixed", 
            onChange: (value) => {handleChange(value, setFixed)}, 
            icon: '',
            error: ''
        },
        {
            type: "radio",
            name: "loanType",
            title: "Floating",
            placeholder: "Floating", 
            icon: '',
            error: ''
        },
    ]

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        if(errors.amount !== '' || errors.date !== '' || errors.emi !== ''){
            return;
        }

        const check = fixed === 'on';
        const loan = await createLoan(amount, emi, start, check)
        setLoading(false);

        if(!loan.success){
            setErrors(prev => ({
                ...prev,
                form: loan.message
            }))
            return;
        }

        setErrors(prev => ({
            ...prev,
            form: ''
        }))

        history.push("/profile");
    }
    return(
        <Form
            title = "Create a new Loan"
            data = {data}
            onFormSubmit = {handleSubmit}
            error = {errors.form}
            loading = {loading}
        />
    )
}

export default LoanForm
