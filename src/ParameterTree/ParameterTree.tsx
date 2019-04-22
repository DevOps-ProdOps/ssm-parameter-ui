import React, { useEffect, useState } from "react";
import {
  getParameters,
  TreeNode,
  treeParameters,
} from "../services/parameters";
import { Dimmer, Grid, List, Loader, Message } from "semantic-ui-react";
import { ParameterNode } from "../ParameterNode/ParameterNode";
import { hasErrored, isLoading, Loadable } from "../state/reducer";

export type ParameterTreeProps = {};

type ConnectedParameterTreeProps = ParameterTreeProps &
  Loadable<TreeNode> & {
    load: () => void;
  };

export const ParameterTree: React.FunctionComponent<
  ConnectedParameterTreeProps
> = props => {
  // const [tree, setTree] = useState<TreeNode | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   getParameters("/")
  //     .then(params => {
  //       setLoading(false);
  //       setTree(treeParameters(params));
  //     })
  //     .catch(setError);
  // }, []);

  useEffect(() => {
    props.load();
  }, []);

  if (hasErrored(props)) {
    return (
      <Message negative>
        <Message.Header>Failed to load parameters.</Message.Header>
        <pre>{props.error.stack}</pre>
      </Message>
    );
  } else if (isLoading(props)) {
    return (
      <Dimmer active>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
    );
  } else {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <ParameterNode node={props.value} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};
