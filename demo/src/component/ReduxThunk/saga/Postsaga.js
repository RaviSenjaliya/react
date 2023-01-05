import { put, takeEvery, delay, all, call } from "redux-saga/effects";
import axios from "axios";

export function* WatcherFetch() {
  yield takeEvery("FetchRequest", FatchData);
}

export function* FatchData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = yield call(axios.get, url);

    yield put({
      type: "FetchSuccess",
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: "FetchFail",
      payload: error,
    });
  }
}
