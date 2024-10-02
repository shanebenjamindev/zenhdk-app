import React, { useState } from 'react';
import { Table, Button, Icon, Input, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const VoucherDetail = () => {
  const [rows, setRows] = useState([
    {
      maHang: '',
      tenHang: 'Hàng hóa 01',
      maKho: '',
      dvt: '',
      soLuong: '',
      gia: '',
      thanhTien: '',
      nhomNganh: 'N01',
    },
  ]);

  // Sample product options for the maHang dropdown
  const productOptions = [
    { key: 'HH01', value: 'HH01', text: 'Hàng hóa 01' },
    { key: 'HH02', value: 'HH02', text: 'Hàng hóa 02' },
    { key: 'HH03', value: 'HH03', text: 'Hàng hóa 03' },
    // Add more product options here
  ];

  const khoOptions = [
    { key: 'KH01', value: 'KH01', text: 'Kho 1' },
    { key: 'KH02', value: 'KH02', text: 'Kho 2' },
    // Add more kho options here
  ];

  const dvtOptions = [
    { key: 'PCS', value: 'PCS', text: 'PCS' },
    { key: 'BOX', value: 'BOX', text: 'BOX' },
    // Add more unit options here
  ];

  const nhomNganhOptions = [
    { key: 'N01', value: 'N01', text: 'Nhóm ngành 1' },
    { key: 'N02', value: 'N02', text: 'Nhóm ngành 2' },
    // Add more nhom nganh options here
  ];

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];

    // Set the value of the current field
    updatedRows[index][field] = value;

    // If 'maHang' is changed, add a new row
    if (field === 'maHang' && value) {
      // Optional: Clear values of the newly added row for better UX
      updatedRows.push({
        maHang: '',
        tenHang: '',
        maKho: '',
        dvt: '',
        soLuong: '',
        gia: '',
        thanhTien: '',
        nhomNganh: '',
      });
    }

    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        maHang: '',
        tenHang: '',
        maKho: '',
        dvt: '',
        soLuong: '',
        gia: '',
        thanhTien: '',
        nhomNganh: '',
      },
    ]);
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
  };

  return (
    <div id="voucher-detail">
      <div style={{ position: 'relative', overflow: 'hidden', height: '40px', marginBottom: '14px' }}>
        <div style={{ position: 'absolute', overflowX: 'scroll', inset: '0px 0px -40px' }}>
          <div className="ui pointing secondary tab-menu menu">
            <a className="active item">Chi Tiết</a>
            <a className="item">Hóa Đơn</a>
          </div>
        </div>
      </div>
      <div className="vch-scroll-table" id="tbl-detail">
        <Table celled selectable compact unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Mã hàng</Table.HeaderCell>
              <Table.HeaderCell>Tên hàng</Table.HeaderCell>
              <Table.HeaderCell>Mã Kho</Table.HeaderCell>
              <Table.HeaderCell>Đơn vị tính</Table.HeaderCell>
              <Table.HeaderCell className="right aligned">Số lượng</Table.HeaderCell>
              <Table.HeaderCell className="right aligned">Giá</Table.HeaderCell>
              <Table.HeaderCell className="right aligned">Thành tiền</Table.HeaderCell>
              <Table.HeaderCell>Nhóm ngành</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows.map((row, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Dropdown
                    fluid
                    selection
                    search
                    options={productOptions}
                    placeholder="Mã hàng"
                    value={row.maHang}
                    onChange={(e, { value }) => handleInputChange(index, 'maHang', value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    placeholder="Tên hàng"
                    value={row.tenHang}
                    onChange={(e) => handleInputChange(index, 'tenHang', e.target.value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Dropdown
                    fluid
                    selection
                    search
                    options={khoOptions}
                    placeholder="Mã kho"
                    value={row.maKho}
                    onChange={(e, { value }) => handleInputChange(index, 'maKho', value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Dropdown
                    fluid
                    selection
                    search
                    options={dvtOptions}
                    placeholder="Đơn vị tính"
                    value={row.dvt}
                    onChange={(e, { value }) => handleInputChange(index, 'dvt', value)}
                  />
                </Table.Cell>
                <Table.Cell className="right aligned">
                  <Input
                    fluid
                    type="number"
                    placeholder="Số lượng"
                    value={row.soLuong}
                    onChange={(e) => handleInputChange(index, 'soLuong', e.target.value)}
                  />
                </Table.Cell>
                <Table.Cell className="right aligned">
                  <Input
                    fluid
                    type="number"
                    placeholder="Giá"
                    value={row.gia}
                    onChange={(e) => handleInputChange(index, 'gia', e.target.value)}
                  />
                </Table.Cell>
                <Table.Cell className="right aligned">
                  <Input
                    fluid
                    type="number"
                    placeholder="Thành tiền"
                    value={row.thanhTien}
                    onChange={(e) => handleInputChange(index, 'thanhTien', e.target.value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Dropdown
                    fluid
                    selection
                    search
                    options={nhomNganhOptions}
                    placeholder="Nhóm ngành"
                    value={row.nhomNganh}
                    onChange={(e, { value }) => handleInputChange(index, 'nhomNganh', value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Icon
                    name="trash"
                    link
                    onClick={() => deleteRow(index)}
                    className="delete-col"
                  />
                </Table.Cell>
              </Table.Row>
            ))}
            <Table.Row>
              <Table.Cell colSpan="8">
                <Button icon labelPosition="left" onClick={addRow}>
                  <Icon name="plus" /> Thêm dòng
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default VoucherDetail;
