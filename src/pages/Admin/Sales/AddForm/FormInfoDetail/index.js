import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    DatePicker,
    Button,
    Row,
    Col,
    Modal,
    Typography,
} from 'antd';
import { UserOutlined, CalendarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import ReusableModal from '../../../../../components/ReuseableModal';
import data from "../../../../../data/Data.json";

const { Option } = Select;

const FormInforDetail = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isBankModalVisible, setIsBankModalVisible] = useState(false);
    const [banks, setBanks] = useState([]);
    const [columns, setColumns] = useState({}); // To hold the column configurations

    useEffect(() => {
        // Load data from JSON file
        if (data && data.data && data.data.length > 0) {
            const item = data.data[0]; // Access the first item in the array
            setBanks(item.banks);
            setColumns(item.columns); // Set the columns from the JSON structure
        }
    }, []);

    const handleOpenModal = () => {
        setIsBankModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsBankModalVisible(false);
    };

    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value);
        handleCloseModal(); // Close the modal after selection
    };

    // Update this function to handle selection from the modal
    const handleBankSelect = (selectedBank) => {
        setPaymentMethod(selectedBank.code); // Update the payment method with the selected bank code
    };

    const handleCloseBankModal = () => {
        setIsBankModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <>
            <Form onFinish={onFinish} layout="vertical">
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="ma_kh"
                            label="Khách hàng"
                            rules={[{ required: true, message: 'Vui lòng nhập khách hàng!' }]}
                        >
                            <Input placeholder="Tìm kiếm khách hàng..." prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="dia_chi_vat"
                            label="Địa chỉ"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                        >
                            <Input placeholder="Địa chỉ" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="ngay_ct"
                            label="Ngày chứng từ"
                            rules={[{ required: true, message: 'Vui lòng chọn ngày!' }]}
                        >
                            <DatePicker
                                placeholder="dd/MM/yyyy"
                                style={{ width: '100%' }}
                                suffixIcon={<CalendarOutlined />}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="nguoi_gd"
                            label="Người giao dịch"
                            rules={[{ required: true, message: 'Vui lòng nhập người giao dịch!' }]}
                        >
                            <Input placeholder="Người giao dịch" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="dien_giai"
                            label="Diễn giải"
                            rules={[{ required: true, message: 'Vui lòng nhập diễn giải!' }]}
                        >
                            <Input placeholder="Diễn giải" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="so_ct"
                            label="Số chứng từ"
                            rules={[{ required: true, message: 'Vui lòng nhập số chứng từ!' }]}
                        >
                            <Input placeholder="Số chứng từ" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="tk_pt"
                            label="Hình thức thanh toán"
                            rules={[{ required: true, message: 'Vui lòng chọn hình thức thanh toán!' }]}
                        >
                            <Row gutter={8} align="middle">
                                <Col span={3}>
                                    <Button type="primary" onClick={handleOpenModal} style={{ width: '100%' }}>
                                        <UnorderedListOutlined />
                                    </Button>
                                </Col>
                                <Col span={21}>
                                    <Select
                                        placeholder="Chọn hình thức thanh toán"
                                        value={paymentMethod}
                                        onChange={handlePaymentMethodChange}
                                        style={{ width: '100%' }}
                                    >
                                        {banks.map((bank) => (
                                            <Option key={bank.id} value={bank.code}>
                                                {bank.code} - {bank.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

            <ReusableModal
                isVisible={isBankModalVisible}
                onClose={handleCloseBankModal}
                title="Chọn ngân hàng"
                data={banks}
                type="banks"
                onSelect={handleBankSelect} // Pass the updated selection logic
                columns={columns.banks} // Pass the columns for banks
            />
        </>
    );
};

export default FormInforDetail;
