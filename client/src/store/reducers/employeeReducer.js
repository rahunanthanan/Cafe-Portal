import { FETCH_EMPLOYEES_SUCCESS, ADD_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_SUCCESS } from '../actions/actionTypes';

const initialState = {
  employees: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return { ...state, employees: action.payload };
    case ADD_EMPLOYEE_SUCCESS:
      return { ...state, employees: [...state.employees, action.payload] };
    case UPDATE_EMPLOYEE_SUCCESS:
      const updatedEmployees = state.employees.map(employee => {
        if (employee.id === action.payload.id) {
          return action.payload;
        } else {
          return employee;
        }
      });
      return { ...state, employees: updatedEmployees };
    case DELETE_EMPLOYEE_SUCCESS:
      const filteredEmployees = state.employees.filter(employee => employee.id !== action.payload);
      return { ...state, employees: filteredEmployees };
    default:
      return state;
  }
};

export default employeeReducer;
