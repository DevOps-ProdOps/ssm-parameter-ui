import { compose } from "recompose";
import { connect } from "react-redux";
import { State } from "../state/reducer";
import { updateParameter } from "../state/actions";
import { EditModal as UnwrappedEditModal, EditModalProps } from "./EditModal";
import React from "react";

export const EditModal = compose(
  connect(
    (state: State) => state.updateParameter,
    updateParameter
  )
)(UnwrappedEditModal as any) as React.ComponentType<EditModalProps>;
