import {Button, Form, Input, message, Modal, Table} from 'antd';
import {CheckCircleTwoTone, CloseCircleTwoTone, DeleteTwoTone, EditTwoTone} from '@ant-design/icons';
import React, {useEffect, useReducer} from "react";
import {query_post as query, save} from "../ajax";

const LIST_QUERY = '/defdoc/queryList';
const LIST_DELETE = '/defdoc/deleteDefdoclist';
const LIST_SAVE = '/defdoc/saveDefdoclist';
const QUERY = '/defdoc/query';
const DELETE = '/defdoc/deleteDefdoc';
const SAVE = '/defdoc/saveDefdoc';

const initState = {
    //档案列表list控制值
    data:[],            //档案列表list数据
    expandedRowKeys:[], //档案列表list展开行记录
    visiblelist:false,  //是否展示档案新增弹窗
    confirmLoadinglist:false,//档案新增弹窗的保存按钮是否加载中

    //档案详情控制值
    detailedata:{},     //档案详情数据
    visible:false,      //是否展示档案详情新增弹窗
    confirmLoading:false,//档案详情新增弹窗的保存按钮是否加载中

    codedisabled:false, //档案编码禁用
}

function loginReducer(state, action) {
    switch (action.type) {
        case 'refreshData':return {...state,data:action.data};
        case 'refreshDetailedata':
            state.detailedata[action.defdoclistid]=action.data;
            return {...state};
        case 'listModal':return {...state,visiblelist:action.visiblelist};
        case 'loadingListModal':return {...state,confirmLoadinglist:action.confirmLoadinglist};
        case 'modal':return {...state,visible:action.visible};
        case 'loadingModal':return {...state,confirmLoading:action.confirmLoading};
        case 'expandedRows':return {...state,expandedRowKeys:action.expandedRowKeys};
        case 'codedisabled':return {...state,codedisabled:action.codedisabled};
        default:
            return state;
    }
}

const SMDefdoclist = (props) => {

    const [state, dispatch] = useReducer(loginReducer, initState);

    const {data,expandedRowKeys,visiblelist,confirmLoadinglist,detailedata,visible,confirmLoading,codedisabled} = state;

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
                {record.enablement ? <Button type="text" icon={<CloseCircleTwoTone/>} onClick={enablementlist.bind(this,record,0)}/>
                    : <Button type="text" icon={<CheckCircleTwoTone/>} onClick={enablementlist.bind(this,record,1)}/>}
                    <Button type="text" icon={<EditTwoTone/>} onClick={editlist.bind(this,record)}/>
                {record.enablement ? null : <Button type="text" icon={<DeleteTwoTone twoToneColor={'#eb2f96'} onClick={deletelist.bind(this,record)}/>}/>}
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
                    {record.enablement ? <Button type="text" icon={<CloseCircleTwoTone/>}
                                                                            onClick={enablement.bind(this, record, 0)}/>
                        : <Button type="text" icon={<CheckCircleTwoTone/>}
                                  onClick={enablement.bind(this, record, 1)}/>}
                    <Button type="text" icon={<EditTwoTone/>} onClick={edit.bind(this,record)}/>
                    {record.enablement ? null : <Button type="text" icon={<DeleteTwoTone twoToneColor={'#eb2f96'}
                                                                                         onClick={delete2.bind(this, record)}/>}/>}
                </div>
            },
        ]
        return <div>
            <Button type="primary" onClick={add.bind(this,record)}>添加值</Button>
            <Table
                columns={columns}
                rowKey={'defdocid'}
                dataSource={detailedata[record.defdoclistid]}
                pagination={false}/>
        </div>;
    };

    //档案列表表单
    const [listform] = Form.useForm();
    const [form] = Form.useForm();

    useEffect(function () {
        querData();
    },1);

    //查询列表数据
    const querData = () => {
        query(LIST_QUERY, {}, (data) => {
            if(data && data.status === 1){
                dispatch({type:'refreshData',data:data.data});
            }else {
                message.error('查询失败:' + data.msg);
            }
        });
    }

    //展开行时查询数据
    const expandQueryData = (expanded, record) => {
        if (expanded){
            query(QUERY,{id:record.defdoclistid},(data) => {
                if(data && data.status === 1){
                    dispatch({type:'refreshDetailedata',defdoclistid:record.defdoclistid,data:data.data});
                }else {
                    message.error('查询失败:' + data.msg);
                }
            })
        }
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
    //列表编辑
    const editlist = (record) => {
        listform.setFieldsValue(record);
        dispatch({type:'codedisabled',codedisabled:true});
        dispatch({type:'listModal',visiblelist:true});
    }

    //删除
    const delete2 = (record) => {
        save(DELETE,record,(data) => {
            if(data && data.status === 1){
                expandQueryData(true,record);
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
                expandQueryData(true,record);
            }else {
                message.error('删除失败:' + data.msg);
            }
        });
    }
    //编辑
    const edit = (record) => {
        form.setFieldsValue(record);
        dispatch({type:'codedisabled',codedisabled:true});
        dispatch({type:'modal',visible:true});
    }

    //档案列表新增按钮
    const addlist = (event) => {
        dispatch({type:'codedisabled',codedisabled:false});
        dispatch({type:'listModal',visiblelist:true});
    }
    //档案新增值
    const add = (record,event) => {
        form.setFieldsValue({defdoclistid:record.defdoclistid});
        dispatch({type:'codedisabled',codedisabled:false});
        dispatch({type:'modal',visible:true});
    }

    //档案新增 保存按钮
    const handleOk = () => {
        dispatch({type:'loadingListModal',confirmLoadinglist:true});
        let addData = listform.getFieldsValue(true);
        save(LIST_SAVE,addData,(data) => {
            if(data && data.status === 1){
                querData();
                listform.resetFields();
                dispatch({type:'listModal',visiblelist:false});
            }else{
                message.error('新增失败:' + data.msg);
            }
            dispatch({type:'loadingListModal',confirmLoadinglist:false});
        });

    };

    //档案新增 取消按钮
    const handleCancel = () => {
        listform.resetFields();
        dispatch({type:'listModal',visiblelist:false});
    };

    //值新增 保存按钮
    const handleOk2 = () => {
        dispatch({type:'loadingModal',confirmLoading:true});
        let addData = form.getFieldsValue(true);
        save(SAVE,addData,(data) => {
            if(data && data.status === 1){
                expandQueryData(true,data.data);
                form.resetFields();
                dispatch({type:'modal',visible:false});
            }else{
                message.error('新增失败:' + data.msg);
            }
            dispatch({type:'loadingModal',confirmLoading:false});
        });

    };

    //值新增 取消按钮
    const handleCancel2 = () => {
        form.resetFields();
        dispatch({type:'modal',visible:false});
    };

    return (
        <div className="s-content">
            <Button type="primary" onClick={addlist}>档案新增</Button>
            <Table
                className="components-table-demo-nested"
                columns={columns}
                rowKey={'defdoclistid'}
                expandable={{ expandedRowRender,
                    onExpandedRowsChange:(expandedRows) => {
                        dispatch({type:'expandedRows',expandedRows:expandedRows});
                    },
                    expandedRowKeys }}
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
                        <Input disabled={codedisabled}/>
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
                        <Input disabled={codedisabled}/>
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
