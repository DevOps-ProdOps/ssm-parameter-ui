import { put, takeLatest, all, call } from "redux-saga/effects";
import * as Actions from "./actions";
import { getParameters, treeParameters } from "../services/parameters";
import { LOAD_PARAMETERS_FAILED, LOAD_PARAMETERS_SUCCEEDED } from "./actions";

export function* loadParameters(): any {
  try {
    const parameters = yield call(getParameters, "/");
    yield put({
      type: LOAD_PARAMETERS_SUCCEEDED,
      payload: treeParameters(parameters),
    });
  } catch (err) {
    yield put({ type: LOAD_PARAMETERS_FAILED, payload: err });
  }
}

export function* watchLoadParameters(): any {
  yield takeLatest(Actions.LOAD_PARAMETERS, loadParameters);
}

export function* rootSaga(): any {
  yield all([watchLoadParameters()]);
}
