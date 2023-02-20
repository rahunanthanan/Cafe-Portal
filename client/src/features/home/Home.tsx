import React, { useState } from "react";
import { Button, Breadcrumb, Layout } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;

export const Home = () => {
  return (
    <Content style={{ flex: 1, padding: "50px", display: "flex" }}>
      <div
        className="site-layout-content"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        You are at Home
      </div>
    </Content>
  );
};
