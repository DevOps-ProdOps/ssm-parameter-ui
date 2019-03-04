import React from "react";
import { Button, Label, List } from "semantic-ui-react";
import { TreeNode } from "./parameters";
import styles from "./Parameter.module.scss";

interface ParameterProps {
  childNode: TreeNode;
}

export const Parameter: React.FunctionComponent<ParameterProps> = ({
  childNode,
}) => (
  <List.Item>
    <List.Content className={styles.parameter}>
      <Button.Group className={styles.controls}>
        <Button icon="pencil" />
        <Button icon="trash" />
      </Button.Group>

      <List.Header className={styles.header}>
        <span className={styles.path}>{childNode.path}</span>

        <Label
          as="span"
          className={styles.parameterType}
          content={childNode.parameter!.Type}
          icon={
            childNode.parameter!.Type === "SecureString" ? "lock" : undefined
          }
        />
      </List.Header>

      <List.Description className={styles.description}>
        <pre>{childNode.parameter!.Value}</pre>
      </List.Description>
    </List.Content>
  </List.Item>
);
