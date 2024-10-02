import React from 'react';
import AppMenu from '../AppMenu';
import useLogin from '../../hooks/useLogin';
import { Flex } from 'antd';
import AdminDropdown from './AdminDropdown';

export default function Header() {


    return (
        <div>
            <div style={{ display: "Flex", padding: "5px", alignItems: "center", justifyContent: "space-between" }}>
                <img src='https://hkd.zentech.vn/static/media/logo.9b3ee1c4.svg' alt="Logo" height={40} />
                <AdminDropdown />
            </div>
            <AppMenu />
        </div>
    )

}