import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Select } from 'antd';

import { addEmployee, updateEmployee } from '../../store/actions/employeeActions';

const { Option } = Select;

const EmployeeForm = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const cafes = useSelector(state => state.cafe.cafes);
  const employeeToEdit = useSelector(state =>
    state.employee.employees.find(employee => employee.id === parseInt(id))
  );
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id && employeeToEdit) {
      setIsEditing(true);
      form.setFieldsValue({
        name: employeeToEdit.name,
        email: employeeToEdit.email,
        phoneNumber: employeeToEdit.phoneNumber,
        daysWorkedInCafe: employeeToEdit.daysWorkedInCafe,
        cafeId: employeeToEdit.cafeId,
      });
    }
  }, [id, employeeToEdit, form]);

  const handleSubmit = values => {
    if (isEditing) {
      dispatch(updateEmployee({ ...values, id: parseInt(id) }));
    } else {
      dispatch(addEmployee(values));
      form.resetFields();
    }
  };

  return (
    <>
      <h1>{isEditing ? 'Edit Employee' : 'Add Employee'}</h1>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter employee name' }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            { required: true, message: 'Please enter phone number' },
            {
              pattern: /^[0-9]+$/,
              message: 'Please enter a valid phone number',
            },
          ]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>
        <Form.Item
          name="daysWorkedInCafe"
          label="Days Worked in Café"
          rules={[
            { required: true, message: 'Please enter days worked in café' },
            {
              pattern: /^[0-9]+$/,
              message: 'Please enter a valid number',
            },
          ]}
        >
          <Input placeholder="Enter days worked in café" />
        </Form.Item>
        <Form.Item
          name="cafeId"
          label="Café"
          rules={[{ required: true, message: 'Please select café' }]}
        >
          <Select placeholder="Select café">
            {cafes.map(cafe => (
              <Option key={cafe.id} value={cafe.id}>
                {cafe.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {isEditing ? 'Save' : 'Add'}
        </Button>
      </Form>
      </>
  );
};

export default EmployeeForm;
