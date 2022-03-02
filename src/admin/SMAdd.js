import React, {useEffect, useState} from 'react'
import {Button, Divider, Form, Input, message, Select} from "antd";
import E from "wangeditor"

import './index.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {save} from '../ajax/index'
import {EditableTagGroup, SMUpload,SMClassify} from "./baseModule/index";

const SMAdd = (props) => {

    const [Dividertitle,setDividertitle] = useState("新增");

    const [smform] = Form.useForm();

    useEffect(function () {
        const editor = new E("#editContent")
        editor.config.onchange = (newHtml) => {
            editoronChange(newHtml);
        }

        editor.create();

        return () => {
            // 组件销毁时销毁编辑器
            editor.destroy()
        }
    },[]);

    const editoronChange = (newHtml) => {
        smform.setFieldsValue({content:newHtml});
    }

    const onFinish = (values) => {
        save('/blogs/save',values,(data) => {
            debugger
        });
    };

    const onFinishFailed = (errorInfo) => {
        message.error('请填写必填项！');
    };

    return (<div className="s-content">

        <Divider orientation="left">{Dividertitle}</Divider>
        <Form
            name="basic"
            labelCol={{span: 5}}
            wrapperCol={{span: 19}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={smform}
            validateMessages={{
                required: "${label} 是必选字段",
            }}
        >
            <Form.Item
                name="title"
                label="标题"
                rules={[{required: true,}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="describe"
                label="描述"
                rules={[{required: true,}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="classify"
                label="分类"
                rules={[{required: true,}]}
            >
                <SMClassify/>
            </Form.Item>

            <Form.Item
                name="type"
                label="类型"
                rules={[{required: true,}]}
            >
                <Select
                    showSearch
                    placeholder="选择类型"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                      <Option key='image' value='image'>image</Option>;
                      <Option key='images' value='images'>images</Option>;
                      <Option key='audio' value='audio'>audio</Option>;
                      <Option key='video' value='video'>video</Option>;
                    }
                </Select>
            </Form.Item>

            <Form.Item
                name="tag"
                label="标签"
                rules={[{required: true,}]}
            >
                <EditableTagGroup/>
            </Form.Item>
            <Form.Item
                name="images"
                label="封面"
                valuePropName="fileList"
                rules={[{required: true,}]}
            >
                <SMUpload fileSize={1}/>
            </Form.Item>
            <Form.Item
                name="content"
                label="内容"
                rules={[{required: true,}]}
            >
                <div id="editContent"/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form></div>);
}

export default SMAdd;
