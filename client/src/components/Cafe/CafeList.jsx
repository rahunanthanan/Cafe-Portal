import React from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const CafeList = (props) => {
  const { cafes } = props;

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Description", field: "description" },
    { headerName: "Location", field: "location" },
    {
      headerName: "",
      field: "viewEmployees",
      cellRenderer: (params) => {
        const cafeId = params.data.id;
        return (
          <Link to={`/cafes/${cafeId}/employees`}>
            <button>View Employees</button>
          </Link>
        );
      },
    },
  ];

  const rowData = cafes.map((cafe) => ({
    id: cafe.id,
    name: cafe.name,
    description: cafe.description,
    location: cafe.location,
  }));

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

export default CafeList;
