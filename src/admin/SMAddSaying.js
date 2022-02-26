import React from 'react'
import {Button, Divider, Form, Input} from 'antd';

import './index.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {save} from '../ajax/index'

const SMAddSaying = (props) => {

    const Dividertitle = "新增";
    const onFinish = (values) => {
        console.log('Success:', values);
        save('/blogs/saveSaying',values,(response) => {
            debugger
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="s-content">
            <Divider orientation="left">{Dividertitle}</Divider>
            <Form
                name="basic"
                labelCol={{span: 5}}
                wrapperCol={{span: 19}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="名言"
                    name="saying"
                    rules={[{ required: true, message: '请输入名言!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="出处"
                    name="provenance"
                    rules={[{ required: true, message: '请输入出处!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SMAddSaying;
