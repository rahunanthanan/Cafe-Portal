import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, Button } from "antd";
import { Employee } from "../schema/Employee";
import { fetchCafes} from "../features/cafes/cafesSlice";
import { selectCafes, selectCafesLoading } from "features/cafes/cafesSelects";

const { Option } = Select;

interface EmployeeFormProps {
  initialValues?: Employee;
  onSubmit: (values: Employee) => void;
  isLoading: boolean;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ initialValues, onSubmit }) => {
  const dispatch = useDispatch();
  const cafes = useSelector(selectCafes);
  const loading = useSelector(selectCafesLoading);

  useEffect(() => {
    dispatch(fetchCafes());
  }, [dispatch]);

  const onFinish = (values: any) => {
    onSubmit(values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues}
      style={{ width: "100%" }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter employee name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email address"
        name="email"
        rules={[
          { required: true, message: "Please enter email address" },
          { type: "email", message: "Please enter a valid email address" },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="Phone number"
        name="phone"
        rules={[
          { required: true, message: "Please enter phone number" },
          {
            pattern: /^\d{10}$/,
            message: "Please enter a valid 10 digit phone number",
          },
        ]}
      >
        <Input type="tel" />
      </Form.Item>
      <Form.Item
        label="Days worked in the café"
        name="daysWorked"
        rules={[{ required: true, message: "Please enter days worked" }]}
      >
        <Input type="number" min={1} max={7} />
      </Form.Item>
      <Form.Item
        label="Café name"
        name="cafeId"
        rules={[{ required: true, message: "Please select a café" }]}
      >
        <Select loading={loading} placeholder="Select a café">
          {cafes.map((cafe) => (
            <Option key={cafe._id} value={cafe._id}>
              {cafe.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeeForm;
