import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Tabs,
    Divider,
    Space,
    Popconfirm,
    Table,
} from 'antd';
import { FilePdfOutlined, FileAddOutlined, FileDoneOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const VoucherDetail = () => {
    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            maHang: '',
            tenHang: 'Sản phẩm A',
            maKho: 'K001',
            donViTinh: 'Cái',
            soLuong: 10,
            gia: 100000,
            thanhTien: 1000000,
            nhomNganh: 'Nhóm A',
        },
        {
            key: '2',
            maHang: '',
            tenHang: 'Sản phẩm B',
            maKho: 'K002',
            donViTinh: 'Cái',
            soLuong: 5,
            gia: 200000,
            thanhTien: 1000000,
            nhomNganh: 'Nhóm B',
        },
    ]);

    const columns = [
        {
            title: 'Mã hàng',
            dataIndex: 'maHang',
            key: 'maHang',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button type="link" icon={<UnorderedListOutlined />} />
                    <Input
                        placeholder="Mã VT"
                        value={text}
                        onChange={(e) => {
                            const newData = dataSource.map(item => {
                                if (item.key === record.key) {
                                    return { ...item, maHang: e.target.value };
                                }
                                return item;
                            });
                            setDataSource(newData);
                        }}
                        style={{ minWidth: 100, marginLeft: 8 }}
                    />
                </div>
            ),
        },
        {
            title: 'Tên hàng',
            dataIndex: 'tenHang',
            key: 'tenHang',
        },
        {
            title: 'Mã Kho',
            dataIndex: 'maKho',
            key: 'maKho',
        },
        {
            title: 'Đơn vị tính',
            dataIndex: 'donViTinh',
            key: 'donViTinh',
        },
        {
            title: 'Số lượng',
            dataIndex: 'soLuong',
            key: 'soLuong',
            align: 'right',
        },
        {
            title: 'Giá',
            dataIndex: 'gia',
            key: 'gia',
            align: 'right',
        },
        {
            title: 'Thành tiền',
            dataIndex: 'thanhTien',
            key: 'thanhTien',
            align: 'right',
        },
        {
            title: 'Nhóm nghành',
            dataIndex: 'nhomNganh',
            key: 'nhomNganh',
        },
        {
            title: '',
            key: 'action',
            render: (text, record) => (
                <Popconfirm
                    title="Bạn có chắc chắn muốn xóa?"
                    onConfirm={() => {
                        const newData = dataSource.filter(item => item.key !== record.key);
                        setDataSource(newData);
                    }}
                    okText="Có"
                    cancelText="Không"
                >
                    <Button type="link" style={{ color: 'red' }}>
                        Xóa
                    </Button>
                </Popconfirm>
            ),
        },
    ];


    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <Tabs defaultActiveKey="1" style={{ marginBottom: '20px' }}>
                <TabPane tab="Chi Tiết" key="1">
                    <div id="tbl-detail">
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}
                            size="small"
                            bordered
                        />
                    </div>
                </TabPane>
                <TabPane tab="Hóa Đơn" key="2">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form layout="vertical">
                                <Form.Item label="Số Seri" required>
                                    <Input placeholder="Số seri" prefix={<FileAddOutlined />} />
                                </Form.Item>
                                <Form.Item label="Số Hóa Đơn" required>
                                    <Input placeholder="Số hóa đơn" />
                                </Form.Item>
                            </Form>
                        </Col>

                        <Col span={8}>
                            <Form layout="vertical">
                                <Form.Item label="Tên Khách Hàng" required>
                                    <Input placeholder="Tên khách hàng" />
                                </Form.Item>
                                <Form.Item label="Địa Chỉ" required>
                                    <Input placeholder="Địa chỉ" />
                                </Form.Item>
                                <Form.Item label="Mã Số Thuế" required>
                                    <Input placeholder="Mã số thuế" />
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                    <Space style={{ marginTop: '20px' }}>
                        <Button type="primary" icon={<FilePdfOutlined />}>
                            Tạo và tải HĐ nháp
                        </Button>
                        <Button type="primary" icon={<FileDoneOutlined />} style={{ marginLeft: '10px' }}>
                            Tạo hóa đơn điện tử
                        </Button>
                    </Space>
                </TabPane>

            </Tabs>


        </div>
    );
};

export default VoucherDetail;
