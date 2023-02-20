import React from "react";
import { RouterProvider } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { ReactComponent as Logo } from "assets/logo.svg";

import { router } from "./router";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout
      className="layout"
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header style={{display: 'flex', flexDirection: 'row'}}>
        <div className="logo">
          <Logo style={{ width: "60px" }} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              label: "Cafes",
              key: "cafes",
            },
            {
              label: "Employees",
              key: "employees",
            },
          ]}
        />
      </Header>
      <RouterProvider router={router} />
      <Footer style={{ textAlign: "center" }}>
        CafeChain ©2023 Created by Rahu
      </Footer>
    </Layout>
  );
};

export default App;
