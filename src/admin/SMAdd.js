import React from 'react'
import {Button, Form, message} from "antd";

import './index.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {save} from '../ajax/index'
import SMUpload from "./SMUpload";

const SMAdd = (props) => {

    const [smform] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        // save('/blogs/saveLink',values,(response) => {
        //     debugger
        // });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('请填写必填项！');
    };

    return (<div className="s-content-from">
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={smform}
        >
            <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                rules={[{required: true,}]}
            >
                <SMUpload fileSize={1} form={smform}/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>

        </Form></div>);
}

export default SMAdd;
