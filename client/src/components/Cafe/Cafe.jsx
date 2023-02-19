import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';
import { getCafes, deleteCafe } from '../../store/actions/cafeActions';

const Cafe = () => {
  const dispatch = useDispatch();
  const cafes = useSelector((state) => state.cafe.cafes);

  useEffect(() => {
    dispatch(getCafes());
  }, [dispatch]);

  const columns = [
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (text, record) => (
        <img src={record.logo} alt={record.name} height="50" />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`/cafe/${record.id}`}>{text}</Link>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Employees',
      dataIndex: 'employees',
      key: 'employees',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    dispatch(deleteCafe(id));
  };

  const handleEdit = (record) => {
    // handle edit logic here
  };

  const handleFilter = (value) => {
    // handle filter logic here
  };

  return (
    <>
      <Button type="primary" style={{ marginBottom: 16 }}>
        <Link to="/cafe/new">Add New Cafe</Link>
      </Button>
      <Table
        columns={columns}
        dataSource={cafes}
        rowKey="id"
        pagination={false}
        onChange={(filters) => handleFilter(filters.location)}
      />
    </>
  );
};

export default Cafe;
