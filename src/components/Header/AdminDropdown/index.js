import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Server, Key, SignOut } from 'react-icons/fa';

const AdminDropdown = () => {
    const [active, setActive] = useState(false);

    const handleDropdownClick = () => {
        setActive(!active);
    };

    const handleOptionSelect = (option) => {
        console.log(`Selected option: ${option}`);
        setActive(false); // Close dropdown after selection
    };

    return (
        <div>
            <Dropdown
                role="listbox"
                aria-expanded={active}
                className={`ui ${active ? 'active' : ''} visible item dropdown`}
                tabIndex="0"
                onClick={handleDropdownClick}
            >
                <div
                    aria-atomic="true"
                    aria-live="polite"
                    role="alert"
                    className="divider text"
                >
                    Admin
                </div>
                <i aria-hidden="true" className="dropdown icon"></i>
                <div className={`left menu transition ${active ? 'visible' : ''}`}>
                    <div
                        role="option"
                        className="item"
                        onClick={() => handleOptionSelect('Bảo trì dữ liệu')}
                    >
                        <Server aria-hidden="true" className="icon" />
                        <label>Bảo trì dữ liệu</label>
                    </div>
                    <div
                        role="option"
                        className="item"
                        onClick={() => handleOptionSelect('Đổi mật khẩu')}
                    >
                        <Key aria-hidden="true" className="icon" />
                        <label>Đổi mật khẩu</label>
                    </div>
                    <div
                        role="option"
                        className="item"
                        onClick={() => handleOptionSelect('Đăng xuất')}
                    >
                        <SignOut aria-hidden="true" className="icon" />
                        <label>Đăng xuất</label>
                    </div>
                </div>
            </Dropdown>
        </div>
    );
};

export default AdminDropdown;
