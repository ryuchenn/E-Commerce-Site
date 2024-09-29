import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {returnError} from '../auth/utils/errorCode';
import API from '../../API/backend';

/**
 * Member Logout
 */
const Logout = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await API.get(process.env.REACT_APP_Auth_API_Prefix + '/logout', {
            });

            if (response.status === 200 || response.status === 201) {
                setErrorMessage('')
                localStorage.removeItem('token');
                sessionStorage.removeItem('token'); 
                document.cookie = 'token=; Max-Age=0; path=/;';
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
                <button>Logout</button>
            </form>
        </div>
    )
}

export default Logout