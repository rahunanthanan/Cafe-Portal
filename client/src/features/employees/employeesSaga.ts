import { createAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { Cafe } from "schema/Cafe";
import { fetchEmployeesAPI } from "./employeesAPI";
import { fetchEmployees } from "./employeesSlice";
import { fetchEmployeesPending, fetchEmployeesRejected, fetchEmployeesFullfield } from "./employeesSlice";
  
function* fetchEmployeesSaga(): any {
  try {
    const employees = yield call(fetchEmployeesAPI);
    yield put(fetchEmployeesFullfield(employees));
  } catch (error) {
    yield put(fetchEmployeesRejected());
  }
};


export function* employeesSaga() {
  yield takeLatest(fetchEmployees, fetchEmployeesSaga);
}