import React, {useState} from 'react'
import {Modal, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {BASEURL} from '../base/GlobalStatic';

const SMUpload = (props) => {

    const [data, setDate] = useState({previewVisible: false, previewImage: '', previewTitle: '', fileList: []});

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleCancel = () => setDate({ previewVisible: false });

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setDate({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    const handleChange = ({file, fileList,event }) => {
        setDate({ fileList });
        props.form.setFieldsValue({ fileList });
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
                name="logo"
                action={BASEURL + "/file/insert"}
                listType="picture-card"
                fileList={data.fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {data.fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
                visible={data.previewVisible}
                title={data.previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={data.previewImage} />
            </Modal>
        </>
    );
}

export default SMUpload;
