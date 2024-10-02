import React from 'react';
import AppMenu from '../AppMenu';
import useAuth from '../../hooks/useAuth';
import useLogin from '../../hooks/useLogin';
import { Flex } from 'antd';
import AdminDropdown from './AdminDropdown';

export default function Header() {

    const { logout } = useAuth()

    return (
        <div>
            <div style={{ display: "Flex", padding: "5px", justifyContent: "space-between" }}>
                <img src='https://hkd.zentech.vn/static/media/logo.9b3ee1c4.svg' alt="Logo" height={40} />
                <AdminDropdown />
                <button onClick={logout}>logout</button>
            </div>
            <AppMenu />
        </div>
    )

}