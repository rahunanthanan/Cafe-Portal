import { useState } from "react";
import { Form, Input, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { Cafe } from 'schema/Cafe';
import { UploadFile } from 'antd/lib/upload/interface';

type Props = {
  initialValues?: Cafe;
  onSubmit: (values: Cafe) => void;
  isLoading: boolean;
};

const CafeForm = ({ initialValues, onSubmit, isLoading }: Props) => {
  const [form] = useForm();
  const [logoFileList, setLogoFileList] = useState<UploadFile[]>(initialValues?.logo ? [{
    uid: '-1',
    name: initialValues.logo,
    status: 'done',
    url: initialValues.logo,
  }] : []);

  const handleFinish = (values: Cafe) => {
    onSubmit(values);
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
    setLogoFileList([]);
  };

  const onLogoChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setLogoFileList(fileList);
  };


  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={initialValues}
      onFinish={handleFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter a name' }]}
      >
        <Input placeholder="Enter name" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter cafe description' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: 'Please enter a location' }]}
      >
      </Form.Item>

      <Form.Item
        label="Logo"
        name="logo"
        valuePropName="fileList"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
        }}
      >
        {/* <Upload.Dragger
          name="logo"
          accept=".jpg,.png,.jpeg"
          showUploadList={false}
          onChange={onLogoChange}
          fileList={logoFileList}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Upload.Dragger> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CafeForm;
