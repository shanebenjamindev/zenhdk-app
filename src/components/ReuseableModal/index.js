import React, { useState } from 'react';
import { Button, Icon, Input, Menu, Modal, Pagination } from 'semantic-ui-react';

// Reusable Modal Component
const ReusableModal = ({ open, onClose, title, data, columns, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(1);

  const itemsPerPage = 5; // You can make this dynamic
  const filteredData = data.filter((item) =>
    columns.some((col) => item[col].toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const paginatedData = filteredData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handlePageChange = (e, { activePage }) => setActivePage(activePage);

  return (
    <Modal open={open} onClose={onClose} size="small" closeIcon centered>
      <Modal.Header>
        <Icon name="list" /> {title}
      </Modal.Header>
      <Modal.Content>
        <Menu secondary>
          <Menu.Item>
            <Button icon onClick={onClose}>
              <Icon name="close" /> Đóng
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button icon>
              <Icon name="plus" /> Thêm
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button icon>
              <Icon name="edit" /> Sửa
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button icon>
              <Icon name="refresh" /> Refresh
            </Button>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <div className="zml-grid-header" style={{ display: 'flex' }}>
          {columns.map((col, index) => (
            <div key={index} style={{ flex: 1 }}>{col}</div>
          ))}
        </div>

        <div className="zml-grid" style={{ height: '300px', overflow: 'auto' }}>
          {paginatedData.map((item, index) => (
            <div
              key={item.id}
              className={`zml-grid-row ${index % 2 === 0 ? '' : 'zml-row-odd'}`}
              style={{ display: 'flex', padding: '7px' }}
              onClick={() => onSelect(item)}
            >
              {columns.map((col, colIndex) => (
                <div key={colIndex} style={{ flex: 1, padding: '0 7px' }}>
                  {item[col]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Modal.Content>

      <Modal.Actions>
        <Pagination
          totalPages={Math.ceil(filteredData.length / itemsPerPage)}
          activePage={activePage}
          onPageChange={handlePageChange}
          size="mini"
        />
        <Button basic primary floated="left" onClick={onClose}>
          <Icon name="close" /> Đóng
        </Button>
        <Button primary>
          <Icon name="checkmark" /> Chọn
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ReusableModal;
