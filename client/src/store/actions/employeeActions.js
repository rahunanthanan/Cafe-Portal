import axios from "axios";

// Constants for action types
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";

// Action creators
export const addEmployee = (employee) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/employees", employee);
      dispatch({ type: ADD_EMPLOYEE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/employees");
      dispatch({ type: FETCH_EMPLOYEES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateEmployee = (id, employee) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/employees/${id}`, employee);
      dispatch({ type: UPDATE_EMPLOYEE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/employees/${id}`);
      dispatch({ type: DELETE_EMPLOYEE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
