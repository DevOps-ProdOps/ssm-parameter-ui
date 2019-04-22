import { Action, ActionCreator } from "redux";

export const LOAD_PARAMETERS = "LOAD_PARAMETERS/LOAD";
export type LOAD_PARAMETERS = "LOAD_PARAMETERS/LOAD";
export const LOAD_PARAMETERS_STARTED = "LOAD_PARAMETERS/STARTED";
export type LOAD_PARAMETERS_STARTED = "LOAD_PARAMETERS/STARTED";
export const LOAD_PARAMETERS_SUCCEEDED = "LOAD_PARAMETERS/SUCCEEDED";
export type LOAD_PARAMETERS_SUCCEEDED = "LOAD_PARAMETERS/SUCCEEDED";
export const LOAD_PARAMETERS_FAILED = "LOAD_PARAMETERS/FAILED";
export type LOAD_PARAMETERS_FAILED = "LOAD_PARAMETERS/FAILED";

export type LoadParametersStartedAction = Action<LOAD_PARAMETERS_STARTED>;

export interface LoadParametersSucceededAction
  extends Action<LOAD_PARAMETERS_SUCCEEDED> {
  payload: any[];
}

export interface LoadParametersFailedAction
  extends Action<LOAD_PARAMETERS_FAILED> {
  payload: Error;
}

export const loadParameters: Record<string, ActionCreator<Action<any>>> = {
  load: () => ({ type: LOAD_PARAMETERS }),
  started: () => ({ type: LOAD_PARAMETERS_STARTED }),
  succeeded: (payload: any) => ({ type: LOAD_PARAMETERS_SUCCEEDED, payload }),
  failed: (payload: Error) => ({ type: LOAD_PARAMETERS_FAILED, payload }),
};

export type AppAction =
  LoadParametersStartedAction |
  LoadParametersSucceededAction |
  LoadParametersFailedAction;
