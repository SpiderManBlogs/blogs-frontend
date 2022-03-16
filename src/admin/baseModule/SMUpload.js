import React, {useState} from 'react'
import {Modal, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {BASEURL} from '../../base/GlobalStatic';

const SMUpload = (props) => {

    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handleCancel = () => {
        setPreviewVisible(false);
    }

    const handlePreview = async file => {
        if (!file.preview) {
            file.preview = BASEURL + "/file/queryImage/" + file.id;
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
            props.onChange(ids);
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
                {fileList.length >= props.fileSize ? null : uploadButton}
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
