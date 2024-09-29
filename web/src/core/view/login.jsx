import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../../API/backend';
import {returnError} from '../auth/utils/errorCode';

/**
 * Visitor Login
 */
const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
        };
        
        try {
            const response = await API.post(process.env.REACT_APP_Auth_API_Prefix+'/login', {
                username: data.username, 
                password: data.password, 
            });

            if (response.status === 200 || response.status === 201){
                setErrorMessage('')
                localStorage.setItem('token', response.data.token);
                Navigate('/')
            }
            else{
                setErrorMessage(`ERROR ${response.status}: ${response.data}`)
            }
        } catch (error) {
            const result = returnError(error);
            setErrorMessage(result);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" maxLength="15" minLength="5"/>
                <input type="password" name="password" placeholder="Password" maxLength="15" minLength="8"/>
                <button type="submit">Login</button>
                <p>Forgot Password?</p>
                <p>Remember</p>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    )
}

export default Login