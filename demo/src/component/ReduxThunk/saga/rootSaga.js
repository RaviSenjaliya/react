import { put, takeEvery, delay, all } from "redux-saga/effects";
import { WatcherFetch } from "./Postsaga";
import { decWatcher, divWatcher, incWatcher, multWatcher } from "./UserSaga";

export default function* RootSaga() {
  yield all([
    incWatcher(),
    decWatcher(),
    multWatcher(),
    divWatcher(),
    WatcherFetch(),
  ]);
}
