import React from 'react';
import { Button } from 'antd';
import { SaveOutlined, LogoutOutlined } from '@ant-design/icons';

const SalesFooter = () => {
    return (
        <div id="PageFooter" className="ui blue small right aligned segment inside" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px', backgroundColor: '#e6f7ff' }}>
            <Button type="default" icon={<LogoutOutlined />} className="ui small basic primary left floated button">
                Bỏ qua
            </Button>
            <Button type="default" form="HKVchHK5" name="saveClose" htmlType="submit" icon={<SaveOutlined />} className="ui small basic primary button" style={{ marginLeft: '8px' }}>
                Lưu và đóng
            </Button>
            <Button type="primary" form="HKVchHK5" name="save" htmlType="submit" icon={<SaveOutlined />} className="ui small primary button" style={{ marginLeft: '8px' }}>
                Lưu
            </Button>
        </div>
    );
};

export default SalesFooter;
