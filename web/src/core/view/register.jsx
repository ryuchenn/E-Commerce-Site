import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../../API/backend';
import {validateFormData} from '../auth/utils/validateRegLog';
import {returnError} from '../auth/utils/errorCode';

/**
 * Visitor Register
 */
const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        };
        
        const validationResult = validateFormData(data)
        if (!validationResult.valid)
        {
            setErrorMessage(validationResult.message)
            return;
        }
        try {
            const response = await API.post(process.env.REACT_APP_Auth_API_Prefix+'/register', {
                username: data.username, 
                email: data.email, 
                password: data.password, 
                confirmPassword: data.confirmPassword
            });

            if (response.status === 200 || response.status === 201){
                setErrorMessage('')
                localStorage.setItem('token', response.data.token);
                Navigate('/')
            }
        } catch (error) {
            const result = returnError(error);
            setErrorMessage(result);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" maxLength="15" minLength="5" />
                <input type="email" name="email" placeholder="Email" maxLength="80" />
                <input type="password" name="password" placeholder="Password" maxLength="15" minLength="8"/>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" maxLength="15" minLength="8"/>
                <button type="submit">Register</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {/* {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} */}
        </div>
    )
}

export default Register