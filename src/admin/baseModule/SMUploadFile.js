import React, {useState} from 'react'
import {Upload, message, Button} from 'antd';
import {CloudUploadOutlined} from '@ant-design/icons';
import {BASEURL} from '../../base/GlobalStatic';


const SMUploadFile = (props) => {

    const onChange = (info) => {
        if (info.file.status !== 'uploading') {
            console.log('上传成功:',info.file, info.fileList);
            if(info.file.response && info.file.response.status === 1){
                props.onChange(info.file.response.data)
            }
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} 文件上传成功`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 文件上传失败.`);
        }
    }

    const beforeUpload = (file) => {
        const isPNG = file.type === 'audio/mpeg';
        if (!isPNG) {
            message.error(`${file.name} is not a png file`);
        }
        return isPNG || Upload.LIST_IGNORE;
    }

    return (<Upload
        name='file'
        action={BASEURL + "/file/insert"}
        headers={{authorization: 'authorization-text',}}
        beforeUpload={beforeUpload}
        onChange={onChange}
        maxCount={1}
    >
        <Button icon={<CloudUploadOutlined />}>Upload</Button>
    </Upload>)
}

export default SMUploadFile;
