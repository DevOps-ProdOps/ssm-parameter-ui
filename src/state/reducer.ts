import { Reducer } from "redux";
import {
  AppAction,
  LOAD_PARAMETERS_FAILED,
  LOAD_PARAMETERS_STARTED,
  LOAD_PARAMETERS_SUCCEEDED,
  UPDATE_PARAMETER_FAILED,
  UPDATE_PARAMETER_STARTED,
  UPDATE_PARAMETER_SUCCEEDED,
} from "./actions";
import { updateTreeOfParameters } from "../services/parameters";

export interface LoadableLoading<T> {
  loading: true;
  error: null;
  value: null;
}

export const isLoading = <T>(
  props: Loadable<T>
): props is LoadableLoading<T> => {
  return props.loading;
};

export interface LoadableLoaded<T> {
  loading: false;
  error: null;
  value: T;
}

export const hasLoaded = <T>(
  props: Loadable<T>
): props is LoadableLoaded<T> => {
  return !props.loading && props.error === null;
};

export interface LoadableErrored<T> {
  loading: false;
  error: Error;
  value: null;
}

export const hasErrored = <T>(
  props: Loadable<T>
): props is LoadableErrored<T> => {
  return props.error !== null;
};

export type Loadable<T> =
  | LoadableLoading<T>
  | LoadableLoaded<T>
  | LoadableErrored<T>;

export interface State {
  parameters: Loadable<any>;
  updateParameter: Loadable<any>;
}

const INITIAL_STATE: State = {
  parameters: {
    loading: true,
    error: null,
    value: null,
  },
  updateParameter: {
    loading: false,
    error: null,
    value: null,
  },
};

export const reducer: Reducer = (
  state: State = INITIAL_STATE,
  action: AppAction
): State => {
  switch (action.type) {
    /*
      Load all parameters
     */
    case LOAD_PARAMETERS_STARTED:
      return {
        ...state,
        parameters: {
          loading: true,
          error: null,
          value: null,
        },
      };
    case LOAD_PARAMETERS_SUCCEEDED:
      return {
        ...state,
        parameters: {
          loading: false,
          error: null,
          value: action.payload,
        },
      };
    case LOAD_PARAMETERS_FAILED:
      return {
        ...state,
        parameters: {
          loading: false,
          error: action.payload,
          value: null,
        },
      };
    /*
      Update a single parameter
     */
    case UPDATE_PARAMETER_STARTED:
      return {
        ...state,
        updateParameter: {
          loading: true,
          error: null,
          value: null,
        },
      };
    case UPDATE_PARAMETER_SUCCEEDED:
      return {
        ...state,
        parameters: {
          loading: false,
          error: null,
          value: updateTreeOfParameters(state.parameters.value, action.payload),
        },
        updateParameter: {
          loading: false,
          error: null,
          value: action.payload,
        },
      };
    case UPDATE_PARAMETER_FAILED:
      return {
        ...state,
        updateParameter: {
          loading: false,
          error: action.payload,
          value: null,
        },
      };
    default:
      return state;
  }
};
