import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AppMenu = () => {
    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        navigate(e.key);
    };

    const systemMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="/settings/sidmnamtc">Khai báo năm tài chính</Menu.Item>
            <Menu.Item key="/settings/sidmnt">Danh mục ngoại tệ</Menu.Item>
            <Menu.Item key="/hkdmct">Khai báo màn hình nhập chứng từ</Menu.Item>
            <Menu.Item key="/sys-setups">Thiết lập tham số hệ thống</Menu.Item>
            <Menu.Item key="/company">Thông tin doanh nghiệp</Menu.Item>
            <Menu.Item key="/sys-reorder-voucher">Đánh lại số chứng từ</Menu.Item>
            <Menu.Item key="/settings/roles">Thiết lập vai trò - quyền hạn</Menu.Item>
            <Menu.Item key="/settings/users">Danh sách người sử dụng</Menu.Item>
            <Menu.Item key="/sys-repost">Ghi sổ chứng từ lại</Menu.Item>
        </Menu>
    );

    const categoryMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="/hkdmvt">Danh mục vật tư hàng hóa</Menu.Item>
            <Menu.Item key="/sodmgiaban">Danh mục giá bán</Menu.Item>
            <Menu.Item key="/hkdmkh">Danh mục khách hàng/ncc/nhân viên</Menu.Item>
            <Menu.Item key="/indmdvt">Danh mục đơn vị tính</Menu.Item>
            <Menu.Item key="/hkdmkho">Danh mục kho</Menu.Item>
            <Menu.Item key="/settings/sidmphi">Danh mục khoản mục phí</Menu.Item>
            <Menu.Item key="/hkdmquy">Danh mục quỹ</Menu.Item>
            <Menu.Item key="/hkdmnhvat">Danh mục nhóm ngành tính thuế</Menu.Item>
            <Menu.Item key="/sodmmhd">Danh mục ký hiệu - mẫu hoá đơn</Menu.Item>
        </Menu>
    );

    const balanceMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="/hkcdvt">Số dư đầu kỳ vật tư hàng hoá</Menu.Item>
            <Menu.Item key="/hkcdquy">Số dư đầu kỳ quỹ</Menu.Item>
            <Menu.Item key="/hkcdthue">Số dư đầu kỳ nghĩa vụ thuế</Menu.Item>
            <Menu.Item key="/hkcdluong">Số dư đầu kỳ lương - bảo hiểm</Menu.Item>
            <Menu.Item key="/hkcdno">Số dư đầu kỳ công nợ</Menu.Item>
            <Menu.Item key="/hkchuyencdvt">Chuyển tồn kho sang năm sau</Menu.Item>
            <Menu.Item key="/hkchuyensodu">Chuyển số dư sang năm sau</Menu.Item>
        </Menu>
    );

    const transactionMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="/hk1">Phiếu thu</Menu.Item>
            <Menu.Item key="/hk2">Phiếu chi</Menu.Item>
            <Menu.Item key="/ca3">Báo có</Menu.Item>
            <Menu.Item key="/ca4">Báo nợ</Menu.Item>
            <Menu.Item key="/hkm">Phiếu nhập mua hàng</Menu.Item>
            <Menu.Item key="/hk5">Phiếu bán hàng</Menu.Item>
            <Menu.Item key="/hk7">Phiếu Nhập kho</Menu.Item>
            <Menu.Item key="/hk8">Phiếu Xuất kho</Menu.Item>
            <Menu.Item key="/hkl">Chứng từ thanh toán tiền lương</Menu.Item>
            <Menu.Item key="/hktinhgiavt">Tính giá hàng tồn kho</Menu.Item>
        </Menu>
    );

    return (
        <div style={{ top: '50px' }}>
            <Menu mode="horizontal" className="green" >
                <Menu.Item key="/">
                    <a href="#/">Trang chủ</a>
                </Menu.Item>
                <Menu.Item key="system">
                    <Dropdown overlay={systemMenu} trigger={['click']}>
                        <span>
                            Hệ thống <DownOutlined />
                        </span>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item key="category">
                    <Dropdown overlay={categoryMenu} trigger={['click']}>
                        <span>
                            Danh mục <DownOutlined />
                        </span>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item key="balance">
                    <Dropdown overlay={balanceMenu} trigger={['click']}>
                        <span>
                            Số dư <DownOutlined />
                        </span>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item key="transaction">
                    <Dropdown overlay={transactionMenu} trigger={['click']}>
                        <span>
                            Nghiệp vụ <DownOutlined />
                        </span>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item key="/reports">
                    <a href="#/reports">Báo cáo</a>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default AppMenu;
