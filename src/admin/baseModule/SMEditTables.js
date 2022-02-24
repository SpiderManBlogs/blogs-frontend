import React, {useContext, useState, useEffect, useRef} from 'react';
import {Table, Input, Button, Popconfirm, Form} from 'antd';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import { arrayMoveImmutable } from 'array-move';

import './SMEditTables.less'

const EditableContext = React.createContext(null);

const EditableCell = ({title, editable, children, dataIndex, record, handleSave, ...restProps}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(function(){
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({...record, ...values});
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

const SortableItem = SortableElement(props => <Form form={props.form} component={false}>
    <EditableContext.Provider value={props.form}>
        <tr {...props} />
    </EditableContext.Provider>
</Form>);
const SortableBody = SortableContainer(props => <tbody {...props} />);

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Sort',
                dataIndex: 'sort',
                width: 30,
                className: 'drag-visible',
                render: () => <DragHandle />,
            },
            {
                title: 'Name',
                dataIndex: 'name',
                className: 'drag-visible',
                editable: true,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                editable: true,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                editable: true,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                width: 30,
                render: (_, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="是否确认删除?" cancelText="取消" okText="确认" onConfirm={() => this.handleDelete(record.key)}>
                            <a>删行</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [],
            count: 0,
        };
    }

    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };
    handleAdd = () => {
        const {count, dataSource} = this.state;
        const newData = {
            key: count,
            age:'000' + count,
            index: count,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };
    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {...item, ...row});
        this.setState({
            dataSource: newData,
        });
    };
    DraggableBodyRow = ({index, className, style, ...restProps }) => {
        const { dataSource } = this.state;
        const [form] = Form.useForm();
        // function findIndex base on Table rowKey props and should always be a right array index
        const indexdata = dataSource.findIndex(x => x.index === restProps['data-row-key']);
        return <SortableItem index={indexdata} {...restProps} form={form} />;
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        const { dataSource } = this.state;
        if (oldIndex !== newIndex) {
            const newData = arrayMoveImmutable([].concat(dataSource), oldIndex, newIndex).filter(
                el => !!el,
            );
            console.log('Sorted items: ', newData);
            this.setState({ dataSource: newData });
        }
    };
    DraggableContainer = props => (
        <SortableBody
            useDragHandle
            disableAutoscroll
            helperClass="row-dragging"
            onSortEnd={this.onSortEnd}
            {...props}
        />
    );

    render() {
        const {dataSource} = this.state;
        const components = {
            body: {
                cell: EditableCell,
                wrapper: this.DraggableContainer,
                row: this.DraggableBodyRow,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Button
                    onClick={this.handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    增行
                </Button>
                <Table
                    pagination={false}
                    rowKey="index"
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}

export default EditableTable;
