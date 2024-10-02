// hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            // If there is no user, redirect to the login page
            navigate("/login");
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('user');
        navigate("/login");
    };

    return { logout };
};

export default useAuth;
