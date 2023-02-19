import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, Select, message } from 'antd';
import { addCafe, editCafe } from '../../store/actions/cafeActions';

const { Option } = Select;

const CafeForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const cafe = useSelector((state) => state.cafes.find((c) => c.id === id)) || {};

  const onFinish = async (values) => {
    setLoading(true);
    const action = id ? editCafe(id, values) : addCafe(values);
    await dispatch(action);
    message.success(`Cafe ${id ? 'updated' : 'added'} successfully!`);
    setLoading(false);
    history.push('/');
  };

  useEffect(() => {
    if (id) {
      form.setFieldsValue(cafe);
    }
  }, [form, id, cafe]);

  return (
    <Form
      form={form}
      name="cafe-form"
      onFinish={onFinish}
      layout="vertical"
      initialValues={cafe}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter cafe name' }]}
      >
        <Input />
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
        rules={[{ required: true, message: 'Please select cafe location' }]}
      >
        <Select placeholder="Select location">
          <Option value="New York">New York</Option>
          <Option value="London">London</Option>
          <Option value="Paris">Paris</Option>
          <Option value="Tokyo">Tokyo</Option>
          <Option value="Sydney">Sydney</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          {id ? 'Update Cafe' : 'Add Cafe'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CafeForm;
