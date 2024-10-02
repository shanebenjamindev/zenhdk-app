import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { FaServer, FaKey, FaSignOutAlt } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const AdminDropdown = () => {
    const { logout, user } = useAuth();

    const handleOptionSelect = ({ key }) => {
        if (key === 'Đăng xuất') {
            logout();
        } else {
            console.log(`Selected option: ${key}`);
        }
    };

    const menuItems = [
        {
            key: 'Bảo trì dữ liệu',
            label: 'Bảo trì dữ liệu',
            icon: <FaServer />,
        },
        {
            key: 'Đổi mật khẩu',
            label: 'Đổi mật khẩu',
            icon: <FaKey />,
        },
        {
            key: 'Đăng xuất',
            label: 'Đăng xuất',
            icon: <FaSignOutAlt />,
        },
    ];

    const menu = {
        items: menuItems,
        onClick: handleOptionSelect,
    };

    return (
        <Dropdown menu={menu} trigger={['hover']}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                {user?.name || 'Admin'}  <i aria-hidden="true" className="dropdown icon"></i>
            </a>
        </Dropdown>
    );
};

export default AdminDropdown;
