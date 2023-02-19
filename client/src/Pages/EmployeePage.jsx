import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EmployeeForm from '../components/Employee/EmployeeForm';
import { fetchEmployees, deleteEmployee } from '../store/actions/employeeActions';



const Employee = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const history = useNavigate();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);
  

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id))
      .then(() => {
        message.success('Employee deleted successfully');
      })
      .catch((error) => {
        message.error('Unable to delete employee');
      });
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setSelectedEmployee(null);
  };

  const handleAddEmployee = () => {
    setShowAddForm(true);
  };

//   const handleEditEmployee = (employee) => {
//     setSelectedEmployee(employee);
//     setShowAddForm(true);
//   };

  const handleRowClick = (record) => {
    history.push(`/employees/${record.id}`);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Assigned Cafe',
      dataIndex: 'assignedCafe',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id, record) => (
        <Popconfirm
          title="Are you sure to delete this employee?"
          onConfirm={() => handleDelete(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <h1>Employees</h1>
      <Button type="primary" onClick={handleAddEmployee} icon={<PlusOutlined />}>
        Add Employee
      </Button>
      {showAddForm && (
        <EmployeeForm
          onCancel={handleCancel}
          selectedEmployee={selectedEmployee}
        />
      )}
      <Table
        dataSource={employees}
        columns={columns}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        rowKey="id"
      />
    </div>
  );
};

export default Employee;
