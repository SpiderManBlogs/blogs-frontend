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
        let isPNG = props.type === 'audio' ? file.type.startsWith('audio') : file.type.startsWith('video');
        if (!isPNG){
            isPNG = props.type === 'video' && (file.name.endsWith('flv')
                || file.name.endsWith('mp4') || file.name.endsWith('mov') || file.name.endsWith('m4v')
                || file.name.endsWith('avi') || file.name.endsWith('mkv') || file.name.endsWith('wmv'));
        }
        if (!isPNG) {
            message.error(`${file.name} is not a Video file`);
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
