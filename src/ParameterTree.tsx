import React, { useEffect, useState } from "react";
import { getParameters, TreeNode, treeParameters } from "./parameters";
import { Dimmer, Grid, List, Loader, Message } from "semantic-ui-react";
import { ParameterNode } from "./ParameterNode";

export const ParameterTree: React.FunctionComponent<{}> = () => {
  const [tree, setTree] = useState<TreeNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getParameters("/")
      .then(params => {
        setLoading(false);
        setTree(treeParameters(params));
      })
      .catch(setError);
  }, []);

  if (error) {
    return (
      <Message negative>
        <Message.Header>Failed to load parameters.</Message.Header>
        <pre>{error.stack}</pre>
      </Message>
    );
  } else if (loading) {
    return (
      <Dimmer active>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
    );
  } else if (tree) {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <ParameterNode node={tree} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else {
    return <span>Boo</span>;
  }
};
