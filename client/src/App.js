import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Cafe from './components/Cafe/Cafe';
import CafeForm from './components/Cafe/CafeForm';

import EmployeeForm from './components/Employee/EmployeeForm';
import Navigation from './components/Navigation';
import CafePage from './Pages/CafePage';
import EmployeePage from './Pages/EmployeePage';

const { Content } = Layout;

function rootReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(rootReducer, {
  cafes: [],
  employee: [],
  cafe: {
    cafes: []
  },
  employee: {
    employees: []
  },
});

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Navigation />
        <Layout>
          <Content style={{ margin: '16px' }}>
            <Routes>
              <Route path="/" index element={<Cafe/>} />
              <Route path="/cafes" element={<CafePage/>} />
              <Route path="/cafe/new" element={<CafeForm/>} />
              <Route path="/cafe/:id" element={<CafeForm/>} />
              <Route path="/employees" element={<EmployeePage/>} />
              <Route path="/employee/new" element={<EmployeeForm/>} />
              <Route path="/employee/:id" element={<EmployeeForm/>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      </Router>
      </Provider>
  );
}

export default App;
