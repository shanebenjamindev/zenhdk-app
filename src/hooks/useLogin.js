import { useCallback } from 'react';
import { message } from 'antd';
import data from '../data/Data.json';

const useLogin = () => {
    const login = useCallback(async (values) => {
        const { email, password } = values;

        const users = data.data[0].users;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            message.success(`Welcome, ${user.name}!`);
            return true; // Successful login
        } else {
            message.error('Login failed! Please check your email or password.');
            return false; // Failed login
        }
    }, []);

    return login;
};

export default useLogin;
