import React from 'react';
import AppMenu from '../../../components/AppMenu';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'antd'
import { ShoppingCartOutlined } from "@ant-design/icons"
export default function Dashboard() {

    return (
        <>
            <Link to="/sales">
                <Button >
                    <ShoppingCartOutlined /> Hóa đơn
                </Button>
            </Link>
        </>
    )

}