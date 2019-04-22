import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { loadParameters } from "../state/actions";
import {
  ParameterTree as UnwrappedParameterTree,
  ParameterTreeProps,
} from "./ParameterTree";
import { State } from "../state/reducer";

export const ParameterTree = compose(
  connect(
    (state: State) => state.parameters,
    loadParameters
  )
)(UnwrappedParameterTree as any) as React.ComponentType<ParameterTreeProps>;
