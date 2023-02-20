import { createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { Cafe } from "schema/Cafe";
import { fetchCafesAPI, fetchCafeByIdAPI } from "./cafesAPI";
import { fetchCafes, fetchCafeById } from "./cafesSlice";
import { fetchCafesPending, fetchCafesFullfield, fetchCafesRejected } from "./cafesSlice";
import { fetchCafeByIdPending, fetchCafeByIdFullfield, fetchCafeByIdRejected } from "./cafesSlice";

function* fetchCafesSaga(): any {
  yield put(fetchCafesPending());

  try {
    const cafes = yield call(fetchCafesAPI);
    yield put(fetchCafesFullfield(cafes));
  } catch (error) {
    console.log("error", error);
    yield put(fetchCafesRejected());
  }
}

function* fetchCafeByIdSaga(action: any): any {
  yield put(fetchCafeByIdPending());

  try {
    const cafe = yield call(() => fetchCafeByIdAPI(action.payload));
    yield put(fetchCafeByIdFullfield(cafe));
  } catch (error) {
    console.log("error", error);
    yield put(fetchCafeByIdRejected());
  }
}

export function* cafesSaga() {
  yield takeEvery(fetchCafes, fetchCafesSaga);
  yield takeEvery(fetchCafeById, fetchCafeByIdSaga);
}
