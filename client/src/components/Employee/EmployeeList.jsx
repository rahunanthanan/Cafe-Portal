import React from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const EmployeeList = (props) => {
  const { employees } = props;

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Days Worked", field: "daysWorked" },
    { headerName: "Cafe", field: "cafeName" },
    {
      headerName: "",
      field: "viewDetails",
      cellRenderer: (params) => {
        const employeeId = params.data.id;
        return (
          <Link to={`/employees/${employeeId}`}>
            <button>View Details</button>
          </Link>
        );
      },
    },
  ];

  const rowData = employees.map((employee) => ({
    id: employee.id,
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    daysWorked: employee.days_worked,
    cafeName: employee.cafe.name,
  }));

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

export default EmployeeList;
