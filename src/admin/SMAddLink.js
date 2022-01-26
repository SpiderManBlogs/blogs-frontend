import React from 'react'
import {Button, Form, Input} from "antd";

import './index.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {save} from '../ajax/index'

const SMAddLink = (props) => {

    const onFinish = (values) => {
        console.log('Success:', values);
        save('/blogs/saveLink',values,(response) => {
            debugger
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(<div className="s-content-from">
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="简述"
                name="sketch"
                rules={[{ required: true, message: '请输入简述!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="链接"
                name="url"
                rules={[{ required: true, message: '请输入链接!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    </div>);
}

export default SMAddLink;
