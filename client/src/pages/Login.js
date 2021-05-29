import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from  '@fortawesome/free-solid-svg-icons';
import { login } from '../services/auth.service';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { UserContext } from '../hooks/UserContext';
import { ReactComponent as Pic } from '../assets/home.svg';

import { handleEmailChange, handlePasswordChange } from '../utilities/handleChanges';

const Login = (props) => {

    const { setUser } = useContext(UserContext); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        form: ''
    })
    
    const message = () => {
        return(
            <div className='form-container-additional'>
                <div className='form-container-desc--2'>
                    New User? <Link to='/signup'> Click here</Link>
                </div>
            </div>
        )
    }

    const data = [
        {
            type: "email",
            title: "Email",
            placeholder: "Enter your email", 
            onChange: (value) => {handleEmailChange(value, setEmail, setErrors)}, 
            icon: faEnvelope,
            error: errors.email
        },
        {
            type: "password",
            title: "Password",
            placeholder: "Enter your Password", 
            onChange: (value) => {handlePasswordChange(value, setPassword, setErrors)}, 
            icon: faLock,
            error: errors.password
        },
    ]

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(errors.email !== '' || errors.password !== ''){
            return;
        }

        setLoading(true);
        const data = await login(email, password);
        setLoading(false);
        if(!data.success){
            return setErrors(prev => ({
                ...prev,
                form: data.message
            }));
        }
        
        setErrors(prev => ({
            ...prev,
            form: ''
        }))

        setUser(data.user);
        props.history.push('/profile')
    }
    return(
        <div className="login">
            <Pic/>
            <Form
                title = "Login"
                data = {data}
                onFormSubmit = {handleSubmit}
                message = {message}
                error = {errors.form}
                loading = {loading}
            />
        </div>
    )
}

export default Login
