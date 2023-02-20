import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { Employee } from "schema/Employee";
import { Breadcrumb, Layout } from "antd";

import { fetchEmployees } from "./employeesSlice";
import { selectEmployees } from "./employeesSelects";
import { selectEmployeesLoading } from "./employeesSelects";

const { Content } = Layout;

const columns: ColumnsType<Employee> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
];

export const EmployeesIndex = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);
  const loading = useAppSelector(selectEmployeesLoading);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <Content style={{ flex: 1, padding: "50px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Employees</Breadcrumb.Item>
        </Breadcrumb>
        <Link to="/employees/new">
          <Button type="primary">Add Employee</Button>
        </Link>
      </div>
      <div className="site-layout-content" style={{ marginTop: "30px" }}>
        {loading ? (
          "Loading..."
        ) : (
          <Table columns={columns} dataSource={employees} />
        )}
      </div>
    </Content>
  );
};
