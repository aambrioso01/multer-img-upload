import React from 'react'
import styled from 'styled-components'
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Uploader = () => {

    const props = {
        name: 'photo',
        multiple: false,
        action: 'http://localhost:5000/photo',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload image</Button>
        </Upload>
    );
};

export default Uploader;