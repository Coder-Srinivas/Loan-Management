import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from  '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import { UserContext } from '../hooks/UserContext';


const { handleChange } = require('../utilities/handleChanges');

const Login = (props) => {

    const { setUser } = useContext(UserContext); 
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [num, setNum] = useState('');
    const [amount, setAmount] = useState('');
    const [personal, setPersonal] = useState('');
    const [home, setHome] = useState('');
    const [car, setCar] = useState('');
    const [education, setEducation] = useState('');
    const [start, setStart] = useState('');
    const [expiry, setExpiry] = useState('');
    const [emi, setEmi] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const [fixed,setFixed]=useState('');
    const [float, setFloat]=useState('');

    const data = [
        {
            type: "email",
            title: "Email",
            placeholder: "Enter your email", 
            onChange: (value) => {handleChange(value, setEmail)}, 
            icon: faEnvelope,
            error: ''
        },
        {
            type: "name",
            title: "Name",
            placeholder: "Enter your Full Name", 
            onChange: (value) => {handleChange(value, setName)}, 
            icon: faUser,
            error: ''
        },
        {
            type: "address",
            title: "Address",
            placeholder: "Enter your full address with city and state", 
            onChange: (value) => {handleChange(value, setAddress)}, 
            icon: '',
            error: ''
        },
        {
            type: "tel",
            title: "Number",
            placeholder: "Enter your Phone number", 
            onChange: (value) => {handleChange(value, setNum)}, 
            icon: '',
            error: ''
        },
        {
            type: "radio",
            title: "Personal Loan",
            placeholder: "Personal Loan", 
            onChange: (value) => {handleChange(value, setPersonal)}, 
            icon: '',
            error: ''
        },
        {
            type: "radio",
            title: "Home Loan",
            placeholder: "Home Loan", 
            onChange: (value) => {handleChange(value, setHome)}, 
            icon: '',
            error: ''
        },
        {
            type: "radio",
            title: "Car Loan",
            placeholder: "Car Loan", 
            onChange: (value) => {handleChange(value, setCar)}, 
            icon: '',
            error: ''
        },
        {
            type: "radio",
            title: "Education Loan",
            placeholder: "Education Loan", 
            onChange: (value) => {handleChange(value, setEducation)}, 
            icon: '',
            error: ''
        },
        {
            type: "number",
            title: "Loan Amount",
            placeholder: "Enter the Loan amount", 
            onChange: (value) => {handleChange(value, setAmount)}, 
            icon: '',
            error: ''
        },
        {
            type: "date",
            title: "Start Date",
            placeholder: "Enter Loan start date", 
            onChange: (value) => {handleChange(value, setStart)}, 
            icon: '',
            error: ''
        },
        {
            type: "date",
            title: "Expiry Date",
            placeholder: "Enter Loan expiry date", 
            onChange: (value) => {handleChange(value, setExpiry)}, 
            icon: '',
            error: ''
        },
        {
            type: "number",
            title: "Monthly installments",
            placeholder: "Enter your preferred monthly installment", 
            onChange: (value) => {handleChange(value, setEmi)}, 
            icon: '',
            error: ''
        },
        {
            type: "checkbox",
            title: "Fixed",
            placeholder: "Fixed", 
            onChange: (value) => {handleChange(value, setFixed)}, 
            icon: '',
            error: ''
        },
        {
            type: "checkbox",
            title: "Floating",
            placeholder: "Floating", 
            onChange: (value) => {handleChange(value, setFloat)}, 
            icon: '',
            error: ''
        },
    ]

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        // const data = await login(email, password);
        // setLoading(false);
        // if(!data.success){
        //     return setErrors(prev => ({
        //         ...prev,
        //         form: data.message
        //     }));
        // }

        setErrors(prev => ({
            ...prev,
            form: ''
        }))

        setUser(data.user);
        props.history.push('/applied')
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

export default Login
