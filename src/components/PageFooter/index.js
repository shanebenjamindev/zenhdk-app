import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const PageFooter = () => {
    const handleDiscard = () => {
        // Logic for discarding changes
        console.log("Discard changes");
    };

    const handleSaveAndClose = () => {
        // Logic for saving and closing
        console.log("Save and close");
    };

    const handleSave = () => {
        // Logic for saving
        console.log("Save");
    };

    return (
        <Segment id="PageFooter" className="ui blue small right aligned inside">
            <Button
                type="button"
                className="ui small basic primary left floated button"
                onClick={handleDiscard}
            >
                <i aria-hidden="true" className="sign-out icon" />
                Bỏ qua
            </Button>
            <Button
                form="HKVchHK5"
                name="saveClose"
                type="submit"
                className="ui small basic primary button"
                onClick={handleSaveAndClose}
            >
                <i aria-hidden="true" className="save icon" />
                Lưu và đóng
            </Button>
            <Button
                form="HKVchHK5"
                name="save"
                type="submit"
                className="ui small primary button"
                style={{ margin: 0 }}
                onClick={handleSave}
            >
                <i aria-hidden="true" className="save icon" />
                Lưu
            </Button>
            <div style={{ clear: 'both' }}></div>
        </Segment>
    );
};

export default PageFooter;
