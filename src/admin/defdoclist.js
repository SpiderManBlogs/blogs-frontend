import {Button, Form, Input, message, Modal, Table} from 'antd';
import {CheckCircleTwoTone, CloseCircleTwoTone, DeleteTwoTone, EditTwoTone} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {query_post as query, save} from "../ajax";

const LIST_QUERY = '/defdoc/queryList';
const LIST_DELETE = '/defdoc/deleteDefdoclist';
const LIST_SAVE = '/defdoc/saveDefdoclist';
const QUERY = '/defdoc/query';
const DELETE = '/defdoc/deleteDefdoc';
const SAVE = '/defdoc/saveDefdoc';

const SMDefdoclist = (props) => {

    const columns = [
        // { title: 'defdoclistid', dataIndex: 'defdoclistid', key: 'defdoclistid'
        // },
        { title: '档案名称', dataIndex: 'defdoclistname', key: 'defdoclistname',width:'25%' },
        { title: '档案编码', dataIndex: 'defdoclistcode', key: 'defdoclistcode',width:'25%' },
        { title: '启用状态', dataIndex: 'enablement', key: 'enablement',width:'5%',
            render:(text, record, index) => {
                if (text === 1){
                    return <CheckCircleTwoTone />;
                }else{
                    return <CloseCircleTwoTone />;
                }
            }
        },
        {title: '操作', key: 'operation',width:'10%',align:'right',
            render: (text, record, index) => <div>
                {record.enablement && record.enablement === 1 ? <Button type="text" icon={<CloseCircleTwoTone/>} onClick={enablementlist.bind(this,record,0)}/>
                    : <Button type="text" icon={<CheckCircleTwoTone/>} onClick={enablementlist.bind(this,record,1)}/>}
                    <Button type="text" icon={<EditTwoTone/>}/>
                    <Button type="text" icon={<DeleteTwoTone twoToneColor={'#eb2f96'} onClick={deletelist.bind(this,record)}/>}/>
        </div>
        },
    ];

    const expandedRowRender = (record, index, indent, expanded) => {
        const columns = [
            // { title: 'defdoclistid', dataIndex: 'defdoclistid', key: 'defdoclistid'
            // },
            // { title: 'defdocid', dataIndex: 'defdocid', key: 'defdocid'
            // },
            {title: '名称', dataIndex: 'defdocname', key: 'defdocname', width: '25%'},
            {title: '编码', dataIndex: 'defdoccode', key: 'defdoccode', width: '25%'},
            {
                title: '启用状态', dataIndex: 'enablement', key: 'enablement', width: '5%',
                render: (text, record, index) => {
                    if (text === 1) {
                        return <CheckCircleTwoTone/>;
                    } else {
                        return <CloseCircleTwoTone/>;
                    }
                }
            },
            {
                title: '操作', key: 'operation', width: '10%', align: 'right',
                render: (text, record, index) => <div>
                    {record.enablement && record.enablement === 1 ? <Button type="text" icon={<CloseCircleTwoTone/>}
                                                                            onClick={enablement.bind(this, record, 0)}/>
                        : <Button type="text" icon={<CheckCircleTwoTone/>}
                                  onClick={enablement.bind(this, record, 1)}/>}
                    <Button type="text" icon={<EditTwoTone/>}/>
                    <Button type="text" icon={<DeleteTwoTone twoToneColor={'#eb2f96'}
                                                             onClick={delete2.bind(this, record)}/>}/>
                </div>
            },
        ]
        return <div>
            <Button type="primary" onClick={add.bind(this,record)}>添加值</Button>
            <Table columns={columns} dataSource={detailedata[record.defdoclistid]} pagination={false}/>
        </div>;
    };

    const [data, setData] = useState([]);
    const [detailedata, setDetailedata] = useState({});
    const [visiblelist, setVisiblelist] = useState(false);
    const [confirmLoadinglist, setConfirmLoadinglist] = useState(false);
    const [listform] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();

    useEffect(function () {
        querData();
    },1);

    //查询列表数据
    const querData = () => {
        query(LIST_QUERY, {}, (data) => {
            if(data && data.status === 1){
                setData(data.data);
            }else {
                message.error('查询失败:' + data.msg);
            }
        });
    }

    //展开行时查询数据
    const expandQueryData = (record, index, indent, expanded) => {
        query(QUERY,{id:index.defdoclistid},(data) => {
            if(data && data.status === 1){
                setDetailedata({[index.defdoclistid]:data.data});
            }else {
                message.error('查询失败:' + data.msg);
            }
        })
    }

    //列表删除
    const deletelist = (record) => {
        save(LIST_DELETE,record,(data) => {
            if(data && data.status === 1){
                querData();
            }else {
                message.error('删除失败:' + data.msg);
            }
        });
    }
    //列表启用停用
    const enablementlist = (record,enablement) => {
        record.enablement = enablement;
        save(LIST_SAVE,record,(data) => {
            if(data && data.status === 1){
                querData();
            }else {
                message.error('删除失败:' + data.msg);
            }
        });
    }

    //删除
    const delete2 = (record) => {
        save(DELETE,record,(data) => {
            if(data && data.status === 1){
                expandQueryData(null,record);
            }else {
                message.error('删除失败:' + data.msg);
            }
        });
    }
    //启用停用
    const enablement = (record,enablement) => {
        record.enablement = enablement;
        save(SAVE,record,(data) => {
            if(data && data.status === 1){
                expandQueryData(null,record);
            }else {
                message.error('删除失败:' + data.msg);
            }
        });
    }


    //档案列表新增按钮
    const addlist = (event) => {
        setVisiblelist(true);
    }
    //档案新增值
    const add = (record,event) => {
        form.setFieldsValue({defdoclistid:record.defdoclistid});
        setVisible(true);
    }

    //档案新增 保存按钮
    const handleOk = () => {
        setConfirmLoadinglist(true);
        let addData = listform.getFieldsValue(true);
        save(LIST_SAVE,addData,(data) => {
            if(data && data.status === 1){
                querData();
                listform.resetFields();
                setVisiblelist(false);
            }else{
                message.error('新增失败:' + data.msg);
            }
            setConfirmLoadinglist(false);
        });

    };

    //档案新增 取消按钮
    const handleCancel = () => {
        setVisiblelist(false);
    };

    //值新增 保存按钮
    const handleOk2 = () => {
        setConfirmLoading(true);
        let addData = form.getFieldsValue(true);
        save(SAVE,addData,(data) => {
            if(data && data.status === 1){
                expandQueryData(null,data.data);
                form.resetFields();
                setVisible(false);
            }else{
                message.error('新增失败:' + data.msg);
            }
            setConfirmLoading(false);
        });

    };

    //值新增 取消按钮
    const handleCancel2 = () => {
        setVisible(false);
    };

    return (
        <div className="s-content">
            <Button type="primary" onClick={addlist}>档案新增</Button>
            <Table
                className="components-table-demo-nested"
                columns={columns}
                expandable={{ expandedRowRender }}
                onExpand={expandQueryData}
                dataSource={data}
            />
            <Modal
                title="档案新增"
                visible={visiblelist}
                onOk={handleOk}
                confirmLoading={confirmLoadinglist}
                onCancel={handleCancel}
                okText={'保存'}
                cancelText={'取消'}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                    form={listform}
                >
                    <Form.Item
                        label="id"
                        name="defdoclistid"
                        hidden={true}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="档案编码"
                        name="defdoclistcode"
                        rules={[{ required: true, message: '请输入编码!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="档案名称"
                        name="defdoclistname"
                        rules={[{ required: true, message: '请输入名称!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="新增值"
                visible={visible}
                onOk={handleOk2}
                confirmLoading={confirmLoading}
                onCancel={handleCancel2}
                okText={'保存'}
                cancelText={'取消'}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="id"
                        name="defdoclistid"
                        hidden={true}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="id"
                        name="defdocid"
                        hidden={true}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="编码"
                        name="defdoccode"
                        rules={[{ required: true, message: '请输入编码!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="名称"
                        name="defdocname"
                        rules={[{ required: true, message: '请输入名称!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default SMDefdoclist;
