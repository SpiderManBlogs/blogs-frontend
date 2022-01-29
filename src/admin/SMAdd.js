import React from 'react'
import {Button, Form} from "antd";

import './index.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {save} from '../ajax/index'
import SMUpload from "./SMUpload";

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

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
    };

    return (<div className="s-content-from">
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={smform}
        >

            <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                    {
                        required: true,
                    },
                ]}
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
