import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { Cafe } from "schema/Cafe";
import { Breadcrumb, Layout } from "antd";

import { fetchCafes } from "./cafesSlice";
import { selectCafes } from "./cafesSelects";
import { selectCafesLoading, selectCafesError } from "./cafesSelects";

const { Content } = Layout;

const columns: ColumnsType<Cafe> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

export const CafesIndex = () => {
  const dispatch = useAppDispatch();
  const cafes = useAppSelector(selectCafes);
  const loading = useAppSelector(selectCafesLoading);

  useEffect(() => {
    dispatch(fetchCafes());
  }, []);

  return (
    <Content style={{ flex: 1, padding: "50px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Cafes</Breadcrumb.Item>
        </Breadcrumb>
        <Link to="/cafes/new">
          <Button type="primary">Add Cafe</Button>
        </Link>
      </div>
      <div className="site-layout-content" style={{marginTop: "30px"}}>
        {loading ? (
          "Loading..."
        ) : (
          <Table columns={columns} dataSource={cafes} />
        )}
      </div>
    </Content>
  );
};
