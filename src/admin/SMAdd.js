import React, {useEffect, useReducer} from 'react'
import {Button, Form, Input, message, Select,Row, Col, Divider} from "antd";
import E from "wangeditor"

import './index.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {query_post as query, save} from '../ajax/index'
import {SMUpload,EditableTagGroup,EditableTable} from "./baseModule/index";
const { Option } = Select;
const QUERY = '/defdoc/query';

const initState ={
    data:[],
    Dividertitle:'新增',
};

function loginReducer(state, action){
    switch (action.type) {
        case 'loadDefdoc':return {...state,data:action.data};
        default:
            return state;
    }
}

const SMAdd = (props) => {

    const [state, dispatch] = useReducer(loginReducer, initState);
    const {data,Dividertitle,templateStr} = state;

    const [smform] = Form.useForm();

    useEffect(function () {
        query(QUERY, {id:'620de57e875b272d49d8793b'}, (data) => {
            if(data && data.status === 1){
                dispatch({type:'loadDefdoc',data:data.data});
            }else {
                message.error('查询参照失败:' + data.msg);
            }
        });
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
        values.tags = tags.state;
        console.log('Success:', values);
        // save('/blogs/saveLink',values,(response) => {
        //     debugger
        // });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                <Select
                    showSearch
                    placeholder="选择分类"
                    optionFilterProp="children"
                    // onChange={onChange}
                    // onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {data.length && data.map((item, index) => {
                        return <Option key={item.defdocid} value={item.defdocid}>{item.defdocname}</Option>;
                    })
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
                name="upload"
                label="Upload"
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
