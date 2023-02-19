import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_CAFES_REQUEST,
  FETCH_CAFES_SUCCESS,
  FETCH_CAFES_FAILURE,
  ADD_CAFE_REQUEST,
  ADD_CAFE_SUCCESS,
  ADD_CAFE_FAILURE,
  UPDATE_CAFE_REQUEST,
  UPDATE_CAFE_SUCCESS,
  UPDATE_CAFE_FAILURE,
  DELETE_CAFE_REQUEST,
  DELETE_CAFE_SUCCESS,
  DELETE_CAFE_FAILURE,
} from './actionTypes';


export function* fetchCafes() {
  try {
    const response = yield call(axios.get, '/cafes');
    yield put({ type: FETCH_CAFES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_CAFES_FAILURE, payload: error.message });
  }
}

function* addCafe(action) {
  try {
    const response = yield call(axios.post, '/cafes', action.payload);
    yield put({ type: ADD_CAFE_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_CAFE_FAILURE, payload: error.message });
  }
}

function* updateCafe(action) {
  try {
    const response = yield call(axios.put, `/cafes/${action.payload.id}`, action.payload.data);
    yield put({ type: UPDATE_CAFE_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_CAFE_FAILURE, payload: error.message });
  }
}

export function* deleteCafe(action) {
  try {
    yield call(axios.delete, `/cafes/${action.payload}`);
    yield put({ type: DELETE_CAFE_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_CAFE_FAILURE, payload: error.message });
  }
}

export function* cafesSaga() {
  yield takeEvery(FETCH_CAFES_REQUEST, fetchCafes);
  yield takeEvery(ADD_CAFE_REQUEST, addCafe);
  yield takeEvery(UPDATE_CAFE_REQUEST, updateCafe);
  yield takeEvery(DELETE_CAFE_REQUEST, deleteCafe);
}
