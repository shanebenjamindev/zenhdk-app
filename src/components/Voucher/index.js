import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const VoucherForm = () => {
    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');
    const [transactionDate, setTransactionDate] = useState(new Date());
    const [transactionNumber, setTransactionNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission (e.g., send data to the server)
        console.log({
            customer,
            address,
            transactionDate,
            transactionNumber,
            paymentMethod,
            salesperson,
            description,
        });
    };

    return (
        <div className="ui container" style={{ marginTop: '20px' }}>
            <div className="ui segments">
                <div className="ui segment">
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="ui three column grid">
                            <div className="row">
                                <div className="middle aligned six wide column">
                                    <div className="required field">
                                        <label>Khách hàng</label>
                                        <div style={{ display: 'flex' }}>
                                            <button type="button" className="ui basic icon button" style={{ marginRight: '0px', borderRadius: '3px 0px 0px 3px' }}>
                                                <i aria-hidden="true" className="list icon"></i>
                                            </button>
                                            <input
                                                type="text"
                                                value={customer}
                                                onChange={(e) => setCustomer(e.target.value)}
                                                placeholder="Khách hàng"
                                                className="ui fluid search selection dropdown"
                                                style={{ flex: 1 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="middle aligned seven wide column">
                                    <div className="field">
                                        <label>Địa chỉ</label>
                                        <input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Địa chỉ"
                                        />
                                    </div>
                                </div>
                                <div className="middle aligned three wide column">
                                    <div className="required field">
                                        <label>Ngày chứng từ</label>
                                        <DatePicker
                                            selected={transactionDate}
                                            onChange={(date) => setTransactionDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            className="ui fluid left icon input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="middle aligned six wide column">
                                    <div className="field">
                                        <label>Người giao dịch</label>
                                        <input
                                            type="text"
                                            value={salesperson}
                                            onChange={(e) => setSalesperson(e.target.value)}
                                            placeholder="Người giao dịch"
                                        />
                                    </div>
                                </div>
                                <div className="middle aligned seven wide column">
                                    <div className="field">
                                        <label>Diễn giải</label>
                                        <input
                                            type="text"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Diễn giải"
                                        />
                                    </div>
                                </div>
                                <div className="middle aligned three wide column">
                                    <div className="required field">
                                        <label>Số chứng từ</label>
                                        <input
                                            type="text"
                                            value={transactionNumber}
                                            onChange={(e) => setTransactionNumber(e.target.value)}
                                            placeholder="Số chứng từ"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="middle aligned six wide column">
                                    <div className="required field">
                                        <label>Hình thức thanh toán</label>
                                        <select
                                            value={paymentMethod}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="ui fluid dropdown"
                                            required
                                        >
                                            <option value="">Hình thức thanh toán</option>
                                            <option value="01">01 - Quỹ tiền mặt</option>
                                            <option value="ACB">ACB - Ngân hàng TMCP Á Châu - ACB</option>
                                            <option value="AGR">AGR - Ngân hàng NN & PT Nông Thôn Việt Nam - Agribank</option>
                                            <option value="PTH">PTH - Công nợ phải thu</option>
                                            <option value="VCB">VCB - Ngân hàng TMCP Ngoại Thương Việt Nam - Vietcombank</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="middle aligned seven wide column"></div>
                                <div className="middle aligned three wide column"></div>
                            </div>
                        </div>
                        <button type="submit" className="ui primary button">Submit</button>
                    </form>
                </div>
                <div className="ui divider"></div>
                <div id="voucher-detail">
                    <div className="ui pointing secondary tab-menu menu">
                        <a className="active item">Chi Tiết</a>
                        <a className="item">Hóa đơn</a>
                    </div>
                    <div className="vch-scroll-table" id="tbl-detail">
                        <table className="ui small celled selectable unstackable compact table">
                            <thead>
                                <tr>
                                    <th className="single line">Mã hàng</th>
                                    <th className="single line">Tên hàng</th>
                                    <th className="single line">Mã Kho</th>
                                    <th className="single line">Đơn vị tính</th>
                                    <th className="single line right aligned">Số lượng</th>
                                    <th className="single line right aligned">Giá</th>
                                    <th className="single line right aligned">Thành tiền</th>
                                    <th className="single line">Nhóm ngành</th>
                                    <th className="collapsing delete-col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="single line">
                                        <div className="zvch-flex-center">
                                            <div style={{ width: '100%' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <button type="button" className="ui basic icon button" style={{ marginRight: '0px', borderRadius: '3px 0px 0px 3px' }}>
                                                        <i aria-hidden="true" className="list icon"></i>
                                                    </button>
                                                    <input
                                                        type="text"
                                                        placeholder="Mã VT"
                                                        className="ui fluid right icon input small"
                                                        style={{ width: '100%' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td colspan="24" class=""></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="CTFormFooter" className="ui segment">
                    <div className="ui two column grid">
                        <div className="eight wide column">
                            <div className="ui checkbox">
                                <input className="hidden" name="is_giam_thue" readOnly tabIndex="-1" type="checkbox" value="" />
                                <label>Hóa đơn giảm thuế theo Nghị định 94/2023/NĐ-CP - Nghị quyết 110/2023/NQ-HĐND</label>
                            </div>
                        </div>
                        <div className="eight wide column right aligned">
                            <button type="submit" className="ui primary button">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoucherForm;
