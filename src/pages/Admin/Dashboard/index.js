import React from 'react';
import AppMenu from '../../../components/AppMenu';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'antd'
import { ShoppingCartOutlined } from "@ant-design/icons"
export default function Dashboard() {

    return (
        <div style={{ minHeight: "90dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Link to="/sales">
                <Button >
                    <ShoppingCartOutlined /> Thêm Mới Hóa Đơn
                </Button>
            </Link>
        </div>
    )

}