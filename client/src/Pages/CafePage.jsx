import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal } from 'antd';
import CafeForm from '../components/Cafe/CafeForm';
//import { fetchCafes, removeCafe } from '../store/actions/cafeActions';
import { fetchCafes, deleteCafe } from '../store/sagas/cafeSaga'

const CafePage = () => {
  const dispatch = useDispatch();
  const { cafes } = useSelector(state => state.cafe);

  useEffect(() => {
    dispatch(fetchCafes());
  }, [dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (text, record) => (
        <img src={record.logo} alt={record.name} style={{ maxWidth: '50px' }} />
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="danger" onClick={() => handleDelete(record)}>Delete</Button>
        </div>
      ),
    },
  ];

  const handleAdd = () => {
    Modal.confirm({
      title: 'Add Café',
      content: <CafeForm onFinish={handleAddFinish} />,
    });
  };

  const handleEdit = (cafe) => {
    Modal.confirm({
      title: 'Edit Café',
      content: <CafeForm onFinish={handleEditFinish} cafe={cafe} />,
    });
  };

  const handleDelete = (cafe) => {
    Modal.confirm({
      title: 'Confirm Deletion',
      content: `Are you sure you want to delete ${cafe.name}?`,
      onOk: () => dispatch(deleteCafe(cafe.id)),
    });
  };

  const handleAddFinish = () => {
    Modal.destroyAll();
  };

  const handleEditFinish = () => {
    Modal.destroyAll();
  };

  return (
    <div>
      <h1>Cafés</h1>
      <Button type="primary" onClick={handleAdd}>Add Café</Button>
      <Table dataSource={cafes} columns={columns} rowKey="id" />
    </div>
  );
};

export default CafePage;
