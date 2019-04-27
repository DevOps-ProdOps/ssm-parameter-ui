import { put, takeLatest, all, call } from "redux-saga/effects";
import * as Actions from "./actions";
import {
  getParameters,
  treeParameters,
  putParameter,
} from "../services/parameters";
import {
  LOAD_PARAMETERS_FAILED,
  LOAD_PARAMETERS_SUCCEEDED,
  UPDATE_PARAMETER_FAILED,
  UPDATE_PARAMETER_SUCCEEDED,
  UpdateParameterAction,
} from "./actions";

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

export function* updateParameter(action: UpdateParameterAction): any {
  try {
    const { Version } = yield call(putParameter, action.payload);

    yield put({
      type: UPDATE_PARAMETER_SUCCEEDED,
      payload: {
        ...action.payload,
        Version,
      },
    });
  } catch (err) {
    yield put({ type: UPDATE_PARAMETER_FAILED, payload: err });
  }
}

export function* watchUpdateParameter(): any {
  yield takeLatest(Actions.UPDATE_PARAMETER, updateParameter);
}

export function* rootSaga(): any {
  yield all([watchLoadParameters(), watchUpdateParameter()]);
}
