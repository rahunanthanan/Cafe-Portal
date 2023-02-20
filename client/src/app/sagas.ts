import { all } from "redux-saga/effects";
import { cafesSaga } from "features/cafes/cafesSaga";
import { employeesSaga } from "features/employees/employeesSaga";

export function* rootSaga() {
  yield all([cafesSaga(), employeesSaga()]);
}
