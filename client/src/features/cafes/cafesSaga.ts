import { call, put, takeEvery } from "redux-saga/effects";
import { Cafe } from "schema/Cafe";
import { fetchCafes } from "./cafesAPI";
import { setCafes } from "./cafesSlice";

function* fetchCafesSaga(action: any): Generator<Cafe[]> {
  try {
    const cafes = yield call(fetchCafes);
    yield put(setCafes(cafes));
  } catch (error) {
    // yield put(setError({ error }));
  }
};

export function* cafesSaga() {
  yield takeEvery(fetchCafes.toString(), fetchCafesSaga);
}
function* call(fetchCafes: () => Promise<{ data: Cafe[]; }>): Cafe[] {
  throw new Error("Function not implemented.");
}

