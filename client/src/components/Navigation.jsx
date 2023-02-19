import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const Navigation = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <NavLink to="/" activeClassName="active-link">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="cafes">
        <NavLink to="/cafes" activeClassName="active-link">
          Cafes
        </NavLink>
      </Menu.Item>
      <Menu.Item key="employees">
        <NavLink to="/employees" activeClassName="active-link">
          Employees
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
