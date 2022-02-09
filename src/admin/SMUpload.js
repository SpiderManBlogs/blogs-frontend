import React, {useState} from 'react'
import {query_get as query} from '../ajax/index'
import {message, Modal, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {BASEURL} from '../base/GlobalStatic';

const SMUpload = (props) => {

    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(true);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const getBase64 = (id) => {
        return new Promise((resolve, reject) => {
            query('/file/query',{fileCode:id},function (data) {
                if (data.status === 1){
                    resolve(data.data);
                }else {
                    reject(data.msg);
                    message.error('查询失败:' + data.msg);
                }
            })
        });
    }

    const handleCancel = () => {
        setPreviewVisible(false);
    }

    const handlePreview = async file => {
        if (!file.preview) {
            file.preview = await getBase64(file.id);
        }
        setPreviewImage(file.preview);
        setPreviewTitle(file.name);
        setPreviewVisible(true);
    };

    const handleChange = ({file, fileList,event }) => {
        setFileList(fileList);
        if(fileList && fileList instanceof Array){
            let ids = [];
            for (let i in fileList){
                if(fileList[i].response && fileList[i].response.status === 1){
                    ids.push(fileList[i].response.data);
                    file.id = fileList[i].response.data;
                }
            }
            props.form.setFieldsValue({upload:ids});
        }
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <>
            <Upload
                name="file"
                action={BASEURL + "/file/insert"}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );
}

export default SMUpload;
