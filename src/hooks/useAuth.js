import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [user, setUser] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
           
            navigate("/login");
        } else {
            setUser(JSON.parse(storedUser)); 
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null); 
        navigate("/login");
    };

    return { user, logout };
};

export default useAuth;
