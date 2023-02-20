import { RootState } from "app/store";

export const selectEmployees = (state: RootState) => state.employees.items;

export const selectEmployeesLoading = (state: RootState) => state.employees.loading;
