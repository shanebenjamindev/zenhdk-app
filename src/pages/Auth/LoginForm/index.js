import React from 'react';
import { Form, Input, Button, Divider, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../../hooks/useLogin';
import './style.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const login = useLogin();
    
    const onFinish = async (values) => {
        const isLoggedIn = await login(values);

        if (isLoggedIn) {
            navigate("/dashboard");
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: "column",
                gap: "20px",
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '450px',
                width: '100%',
            }}
        >
            <img src='https://hkd.zentech.vn/static/media/logo.9b3ee1c4.svg' alt="Logo" width={250} />
            <div style={{ width: "100%", padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                <h3 style={{ textAlign: 'center' }}>Đăng nhập hệ thống</h3>
                <Divider />

                <Form
                    id="login-form"
                    name="login"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                </Form>

                <Divider hidden />
                <Button className="btn-login" form="login-form" type="primary" htmlType="submit" block>
                    Login
                </Button>
                <Divider />
                <div className='form-bottom'>
                    <a href="#/register">Đăng ký sử dụng</a>
                    <span style={{ float: 'right' }}>
                        <a href="#/forgot-password">Quên mật khẩu</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
