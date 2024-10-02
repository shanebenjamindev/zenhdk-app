import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CustomInput = () => {
    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Input
            type="text"
            placeholder="Mã VT"
            id="addRowundefined"
            className="zs-dropdown"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="false"
            autoComplete="off"
            value={value}
            onChange={handleInputChange}
            tabIndex="5"
            style={{ fontSize: '12.6px', minWidth: '100px' }}
        />
    );
};

export default CustomInput;
