import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router";
import { ReactComponent as Logo } from "assets/logo.svg";

const { Header, Content, Footer } = Layout;

export const AppLayout = () => {
  const location = useLocation();


  return (
    <Layout
      className="layout"
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header style={{ display: "flex", flexDirection: "row" }}>
        <div className="logo">
          <Logo style={{ width: "60px" }} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ marginLeft: "30px", flex: 1 }}
          items={[
            {
              key: "home",
              label: <Link to="/">Home</Link>,
            },
            {
              key: "cafes",
              label: <Link to="/cafes">Cafes</Link>,
            },
            {
              key: "employees",
              label: <Link to="/employees">Employees</Link>,
            },
          ]}
        />
      </Header>
      <Outlet />
      <Footer style={{ textAlign: "center" }}>
        CafePortal ©2023 Created by Rahu
      </Footer>
    </Layout>
  );
};
