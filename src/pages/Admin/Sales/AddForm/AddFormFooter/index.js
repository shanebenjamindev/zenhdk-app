import React from 'react';
import { Checkbox, Form, Table, message } from 'antd';

const AddFormFooter = () => {
    const totalColumns = [
        {
            title: '',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Tổng',
            dataIndex: 'value',
            key: 'value',
            align: 'right',
        },
    ];

    const totalData = [
        { key: '1', description: 'Tổng số lượng', value: '' },
        { key: '2', description: 'Tổng tiền', value: '' },
        { key: '3', description: 'Giảm 20% tiền thuế theo NĐ 44/2023/NĐ-CP', value: '' },
        { key: '4', description: 'Tổng thanh toán', value: '' },
    ];

    return (
        <div id="AddFormFooter" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ textAlign: "start" }}>
                    <p>
                        <Checkbox>
                            Hóa đơn giảm thuế theo Nghị định 94/2023/NĐ-CP - Nghị quyết 110/2023/QH15
                        </Checkbox>
                    </p>

                    <p style={{ marginTop: '4px' }}>
                        <Checkbox>
                            Nhập thủ công tiền thuế giảm
                        </Checkbox>
                        <span style={{ color: 'red', fontStyle: 'italic' }}>
                            {' '}
                            (Mặc định phần mềm sẽ tự tính giá trị thuế giảm. Check vào đây nếu bạn muốn sửa lại giá trị.)
                        </span>
                    </p>
                </div>
                <div style={{ width: '48%', textAlign: 'right' }}>
                    <Form layout="vertical" style={{ float: 'right' }}>
                        <Table
                            dataSource={totalData}
                            columns={totalColumns}
                            pagination={false}
                            bordered
                            size="small"
                        />
                    </Form>
                </div>
            </div>

        </div >
    );
};

export default AddFormFooter;
