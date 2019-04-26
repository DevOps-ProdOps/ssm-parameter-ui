import { Action, ActionCreator } from "redux";
import AWS from "aws-sdk";

/*
  Load all parameters.
 */

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

/*
  Update a single parameter.
 */

export const UPDATE_PARAMETER = "UPDATE_PARAMETER/UPDATE";
export type UPDATE_PARAMETER = "UPDATE_PARAMETER/UPDATE";
export const UPDATE_PARAMETER_STARTED = "UPDATE_PARAMETER/STARTED";
export type UPDATE_PARAMETER_STARTED = "UPDATE_PARAMETER/STARTED";
export const UPDATE_PARAMETER_SUCCEEDED = "UPDATE_PARAMETER/SUCCEEDED";
export type UPDATE_PARAMETER_SUCCEEDED = "UPDATE_PARAMETER/SUCCEEDED";
export const UPDATE_PARAMETER_FAILED = "UPDATE_PARAMETER/FAILED";
export type UPDATE_PARAMETER_FAILED = "UPDATE_PARAMETER/FAILED";

export interface UpdateParameterAction extends Action<UPDATE_PARAMETER> {
  payload: AWS.SSM.PutParameterRequest;
}

export type UpdateParameterStartedAction = Action<UPDATE_PARAMETER_STARTED>;

export interface UpdateParameterSucceededAction
  extends Action<UPDATE_PARAMETER_SUCCEEDED> {
  payload: AWS.SSM.PutParameterRequest;
}

export interface UpdateParameterFailedAction
  extends Action<UPDATE_PARAMETER_FAILED> {
  payload: Error;
}

export const updateParameter: Record<string, ActionCreator<Action<any>>> = {
  update: (payload: any) => ({ type: UPDATE_PARAMETER, payload }),
  started: () => ({ type: UPDATE_PARAMETER_STARTED }),
  succeeded: (payload: any) => ({ type: UPDATE_PARAMETER_SUCCEEDED, payload }),
  failed: (payload: Error) => ({ type: UPDATE_PARAMETER_FAILED, payload }),
};

export type AppAction =
  | LoadParametersStartedAction
  | LoadParametersSucceededAction
  | LoadParametersFailedAction
  | UpdateParameterAction
  | UpdateParameterStartedAction
  | UpdateParameterSucceededAction
  | UpdateParameterFailedAction;
