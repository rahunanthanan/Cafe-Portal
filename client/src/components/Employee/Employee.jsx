import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';

import { deleteEmployee, fetchEmployees } from '../../store/actions/employeeActions';

const Employee = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employee.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = employeeId => {
    dispatch(deleteEmployee(employeeId));
  };

  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Days Worked in Café',
      dataIndex: 'daysWorkedInCafe',
      key: 'daysWorkedInCafe',
    },
    {
      title: 'Café Name',
      dataIndex: 'cafeName',
      key: 'cafeName',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={`/employee/edit/${record.id}`}>Edit</Link>
          &nbsp;|&nbsp;
          <a onClick={() => handleDelete(record.id)}>Delete</a>
        </span>
      ),
    },
  ];

  return (
    <>
      <h1>Employees</h1>
      <Table columns={columns} dataSource={employees} rowKey="id" />
      <Link to="/employee/add">
        <Button type="primary">Add New Employee</Button>
      </Link>
    </>
  );
};

export default Employee;
