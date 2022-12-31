import { put, takeEvery, delay, all } from "redux-saga/effects";

export function* incWorker() {
  yield delay(1000);
  yield put({ type: "plus" });
}
export function* decWorker() {
  yield delay(1000);
  yield put({ type: "Minus" });
}
export function* mulWorker() {
  yield delay(1000);
  yield put({ type: "Multy" });
}
export function* divWorker() {
  yield delay(1000);
  yield put({ type: "div" });
}
// ====================================================

export function* incWatcher() {
  yield takeEvery("plus1", incWorker);
}
export function* decWatcher() {
  yield takeEvery("Minus1", decWorker);
}
export function* multWatcher() {
  yield takeEvery("Multy1", mulWorker);
}
export function* divWatcher() {
  yield takeEvery("div1", divWorker);
}

export default function* rootSaga() {
  yield all([incWatcher(), decWatcher(), multWatcher(), divWatcher()]);
}
