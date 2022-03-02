import React, {useEffect,useState,useReducer} from 'react';
import { message, Select} from "antd";
import {query_post as query} from "../../ajax";

const { Option } = Select;
const QUERY = '/defdoc/queryByCode';

const SMClassify = (props) => {

    const [data,setData] = useState();

    useEffect(function () {
        query(QUERY, {code:'classify'}, (data) => {
            if(data && data.status === 1){
                setData(data.data)
            }else {
                message.error('查询参照失败:' + data.msg);
            }
        });
    },[1]);

    return(data ? <Select
        showSearch
        placeholder="选择分类"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onChange={(value, option) => {
            props.onChange(option.data);
        }}
    >
        {data.length && data.map((item, index) => {
            return <Option key={item.defdocid} value={item.defdocid} data={item}>{item.defdocname}</Option>;
        })
        }
    </Select> : null)
}

export default SMClassify;
