import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  addEmployeeSuccess,
  addEmployeeFailure,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
  FETCH_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from '../actions/employeeActions';

function* fetchEmployees() {
  try {
    const response = yield call(axios.get, '/employees');
    yield put(fetchEmployeesSuccess(response.data));
  } catch (error) {
    yield put(fetchEmployeesFailure(error.message));
  }
}

function* addEmployee(action) {
  const { employee, onSuccess, onFailure } = action.payload;
  try {
    const response = yield call(axios.post, '/employees', employee);
    yield put(addEmployeeSuccess(response.data));
    onSuccess(response.data);
  } catch (error) {
    yield put(addEmployeeFailure(error.message));
    onFailure(error.message);
  }
}

function* updateEmployee(action) {
  const { id, employee, onSuccess, onFailure } = action.payload;
  try {
    const response = yield call(axios.put, `/employees/${id}`, employee);
    yield put(updateEmployeeSuccess(response.data));
    onSuccess(response.data);
  } catch (error) {
    yield put(updateEmployeeFailure(error.message));
    onFailure(error.message);
  }
}

function* deleteEmployee(action) {
  const { id, onSuccess, onFailure } = action.payload;
  try {
    yield call(axios.delete, `/employees/${id}`);
    yield put(deleteEmployeeSuccess(id));
    onSuccess();
  } catch (error) {
    yield put(deleteEmployeeFailure(error.message));
    onFailure(error.message);
  }
}

export function* employeeSaga() {
  yield takeLatest(FETCH_EMPLOYEES, fetchEmployees);
  yield takeLatest(ADD_EMPLOYEE, addEmployee);
  yield takeLatest(UPDATE_EMPLOYEE, updateEmployee);
  yield takeLatest(DELETE_EMPLOYEE, deleteEmployee);
}
