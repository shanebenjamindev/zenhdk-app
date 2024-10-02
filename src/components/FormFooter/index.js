import React, { useState } from 'react';
import { Checkbox, Table, Segment, Grid, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const FormFooter = () => {
    const [isGiamThue, setIsGiamThue] = useState(false);
    const [suaThue, setSuaThue] = useState(false);

    // Example values for totals - these would typically be calculated based on user input
    const [tongSoLuong, setTongSoLuong] = useState(0);
    const [tongTien, setTongTien] = useState(0);
    const [giamThue, setGiamThue] = useState(0);
    const [tongThanhToan, setTongThanhToan] = useState(0);

    // Here, we would normally calculate the totals based on your application logic
    const calculateTotals = () => {
        // Example calculations (replace with your logic)
        const newGiamThue = (tongTien * 0.2) || 0; // Example: 20% discount
        setGiamThue(newGiamThue);
        setTongThanhToan(tongTien - newGiamThue);
    };

    return (
        <Segment id="FormFooter" style={{ textAlign: "left" }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8} >
                        <div className="ui checkbox" >
                            <Checkbox
                                label="Hóa đơn giảm thuế theo Nghị định 94/2023/NĐ-CP - Nghị quyết 110/2023/QH15"
                                checked={isGiamThue}
                                onChange={() => setIsGiamThue(!isGiamThue)}
                            />
                        </div>
                        <p style={{ marginTop: '4px' }}>
                            <div className="ui checkbox">
                                <Checkbox
                                    label="Nhập thủ công tiền thuế giảm"
                                    checked={suaThue}
                                    onChange={() => setSuaThue(!suaThue)}
                                />
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}>
                                {' '}
                                (Mặc định phần mềm sẽ tự tính giá trị thuế giảm. Check vào đây nếu bạn muốn sửa lại giá trị.)
                            </span>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="right">
                        <Form className="ui form">
                            <Table celled small definition>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell />
                                        <Table.HeaderCell textAlign="center" style={{ width: '150px' }}>
                                            Tổng
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>Tổng số lượng</Table.Cell>
                                        <Table.Cell textAlign="right">{tongSoLuong}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Tổng tiền</Table.Cell>
                                        <Table.Cell textAlign="right">{tongTien}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Giảm 20% tiền thuế theo NĐ 44/2023/NĐ-CP</Table.Cell>
                                        <Table.Cell textAlign="right">{giamThue}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Tổng thanh toán</Table.Cell>
                                        <Table.Cell textAlign="right">{tongThanhToan}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Message success>
                <i aria-hidden="true" className="history icon" />
                <a>Chứng từ tạo bởi</a> <b></b> lúc <b></b>
            </Message>
        </Segment>
    );
};

export default FormFooter;
