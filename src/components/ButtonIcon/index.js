import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const IconButton = () => {
    const handleButtonClick = () => {
        // Logic for button click
        console.log("Button clicked");
    };

    return (
        <Button
            type="button"
            className="ui basic icon button"
            tabIndex="-1"
            style={{ marginRight: '0px', borderRadius: '3px 0px 0px 3px' }}
            onClick={handleButtonClick}
        >
            <Icon name="list" aria-hidden="true" />
        </Button>
    );
};

export default IconButton;
