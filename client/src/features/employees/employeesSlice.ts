import { createAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { Employee } from "schema/Employee";

export interface EmployeesState {
  loading: boolean,
  error: string | null,
  items: Employee[];
}

const SLICE_NAME = "employees"

export const fetchEmployees = createAction(`${SLICE_NAME}/fetchEmployees`);

const initialState: EmployeesState = {
  loading: true,
  error: null,
  items: []
};

export const employeeSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    fetchEmployeesPending: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchEmployeesFullfield: (state, action: PayloadAction<Employee[]>) => {
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    },
    fetchEmployeesRejected: (state) => {
      return {
        ...state,
        loading: false,
        error: "Fetch employee failed.",
      };
    },
  },
});



export const { fetchEmployeesPending, fetchEmployeesFullfield, fetchEmployeesRejected } =
employeeSlice.actions;

export default employeeSlice.reducer;
