import {Button, Form, Input, message, Modal, Table} from 'antd';
import {CheckCircleTwoTone, CloseCircleTwoTone, DeleteTwoTone, EditTwoTone} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {query_post as query, save} from "../ajax";


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

    const [data, setData] = useState([]);
    const [visiblelist, setVisiblelist] = useState(false);
    const [confirmLoadinglist, setConfirmLoadinglist] = useState(false);
    const [listform] = Form.useForm();

    //查询列表数据
    const querData = () => {
        query('/defdoc/queryList', {}, (data) => {
            if(data && data.status === 1){
                setData(data.data);
            }else {
                message.error('查询失败:' + data.msg);
            }
        });
    }

    //列表删除
    const deletelist = (record) => {
        save('/defdoc/deleteDefdoclist',record,(data) => {
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
        save('/defdoc/saveDefdoclist',record,(data) => {
            if(data && data.status === 1){
                querData();
            }else {
                message.error('删除失败:' + data.msg);
            }
        });
    }

    useEffect(function () {
        querData();
    },1);

    //档案列表新增按钮
    const addlist = (event) => {
        setVisiblelist(true);
    }

    //档案新增 保存按钮
    const handleOk = () => {
        setConfirmLoadinglist(true);
        let addData = listform.getFieldsValue(true);
        save('/defdoc/saveDefdoclist',addData,(data) => {
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

    return (
        <div className="s-content">
            <Button type="primary" onClick={addlist}>档案新增</Button>
            <Table
                className="components-table-demo-nested"
                columns={columns}
                // expandable={{ expandedRowRender }}
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
        </div>
    );
}

export default SMDefdoclist;
