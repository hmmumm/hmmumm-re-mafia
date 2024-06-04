import { useState } from 'react';
import axios from 'axios';

const useSignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleUserChange = (e) => setUsername(e.target.value);
    const handlePassChange = (e) => setPassword(e.target.value);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/auth/login', {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.status === 200) {
                window.location.href = '/';
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Invalid username or password');
            } else {
                setError('Login failed');
            }
            console.error('Login failed', error);
        }
    };

    return {
        username,
        password,
        error,
        handleUserChange,
        handlePassChange,
        handleLogin,
    };
};

export default useSignIn;
