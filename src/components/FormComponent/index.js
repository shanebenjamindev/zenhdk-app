import React, { useState } from 'react';
import { Form, Input, Button, Icon, Grid, Dropdown, Segment, Modal, List, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const FormComponent = () => {
    // States for modals and selected values
    const [customerModalOpen, setCustomerModalOpen] = useState(false);
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const customerOptions = [
        { key: 'KH001', value: 'KH001', text: 'KH001 - Cty A' },
        { key: 'KH002', value: 'KH002', text: 'KH002 - Cty A1' },
        { key: 'KH003', value: 'KH003', text: 'KH003 - Cty 1' },
        { key: 'KH004', value: 'KH004', text: 'KH004 - Cty 2' },
        // Add other customer options here
    ];

    const paymentMethodOptions = [
        { key: '01', value: '01', text: '01 - Quỹ tiền mặt' },
        { key: 'ACB', value: 'ACB', text: 'ACB - Ngân hàng TMCP Á Châu - ACB' },
        // Add other payment method options here
    ];

    // Function to handle customer selection from the modal
    const handleCustomerSelect = (customer) => {
        setSelectedCustomer(customer.value);
        setCustomerModalOpen(false); // Close modal after selection
    };

    // Function to handle payment method selection from the modal
    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethod(method.value);
        setPaymentModalOpen(false); // Close modal after selection
    };

    return (
        <Segment>
            <Form className="ui form">
                <Grid>
                    {/* Row 1 */}
                    <Grid.Row columns={3}>
                        <Grid.Column width={6}>
                            <Form.Field required>
                                <label>Khách hàng</label>
                                <div style={{ display: 'flex' }}>
                                    <Button
                                        basic
                                        icon
                                        onClick={() => setCustomerModalOpen(true)}
                                        style={{ marginRight: '0px', borderRadius: '3px 0px 0px 3px' }}
                                    >
                                        <Icon name="list" />
                                    </Button>
                                    <Dropdown
                                        placeholder="Select Customer"
                                        search
                                        selection
                                        options={customerOptions}
                                        value={selectedCustomer} // Selected value
                                        fluid
                                        onChange={(e, { value }) => setSelectedCustomer(value)} // Handle change in dropdown
                                    />
                                </div>
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column width={7}>
                            <Form.Field>
                                <label>Địa chỉ</label>
                                <Input
                                    name="dia_chi_vat"
                                    placeholder="Địa chỉ"
                                    defaultValue="123 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM"
                                />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Form.Field required>
                                <label>Ngày chứng từ</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy"
                                    isClearable
                                    showPopperArrow={false}
                                />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>

                    {/* Row 2 */}
                    <Grid.Row columns={3}>
                        <Grid.Column width={6}>
                            <Form.Field>
                                <label>Người giao dịch</label>
                                <Input name="nguoi_gd" placeholder="Người giao dịch" />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column width={7}>
                            <Form.Field>
                                <label>Diễn giải</label>
                                <Input name="dien_giai" placeholder="Diễn giải" />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Form.Field required>
                                <label>Số chứng từ</label>
                                <Input name="so_ct" placeholder="Số chứng từ" defaultValue="001/24.10" />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>

                    {/* Row 3 */}
                    <Grid.Row columns={3}>
                        <Grid.Column width={6}>
                            <Form.Field required>
                                <label>Hình thức thanh toán</label>
                                <div style={{ display: 'flex' }}>
                                    <Button
                                        basic
                                        icon
                                        onClick={() => setPaymentModalOpen(true)}
                                        style={{ marginRight: '0px', borderRadius: '3px 0px 0px 3px' }}
                                    >
                                        <Icon name="list" />
                                    </Button>
                                    <Dropdown
                                        placeholder="Select Payment Method"
                                        search
                                        selection
                                        options={paymentMethodOptions}
                                        value={selectedPaymentMethod} // Selected value
                                        fluid
                                        onChange={(e, { value }) => setSelectedPaymentMethod(value)} // Handle change in dropdown
                                    />
                                </div>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={7}></Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>

            {/* Customer Modal */}
            <Modal
                open={customerModalOpen}
                onClose={() => setCustomerModalOpen(false)}
                size="small"
                closeIcon
            >
                <Modal.Header>Danh sách khách hàng</Modal.Header>
                <Modal.Content>
                    <List selection>
                        {customerOptions.map((customer) => (
                            <List.Item key={customer.key} onClick={() => handleCustomerSelect(customer)}>
                                {customer.text}
                            </List.Item>
                        ))}
                    </List>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setCustomerModalOpen(false)} primary>
                        Đóng
                    </Button>
                </Modal.Actions>
            </Modal>

            {/* Payment Method Modal */}
            <Modal
                open={paymentModalOpen}
                onClose={() => setPaymentModalOpen(false)}
                size="small"
                closeIcon
            >
                <Modal.Header>Hình thức thanh toán</Modal.Header>
                <Modal.Content>
                    <List selection>
                        {paymentMethodOptions.map((method) => (
                            <List.Item key={method.key} onClick={() => handlePaymentMethodSelect(method)}>
                                {method.text}
                            </List.Item>
                        ))}
                    </List>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setPaymentModalOpen(false)} primary>
                        Đóng
                    </Button>
                </Modal.Actions>
            </Modal>
        </Segment>
    );
};

export default FormComponent;
