import React, { useEffect } from 'react';
import './style.css';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
export default function Auth() {
    
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            navigate("/dashboard"); // Redirect to dashboard if user is already logged in
        }
    }, [navigate]);

    return (
        <div className='bg'>
            <LoginForm />
        </div>
    )

}