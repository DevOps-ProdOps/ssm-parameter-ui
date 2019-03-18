import React from "react";
import { Button, Label } from "semantic-ui-react";
import { TreeNode } from "./parameters";
import styles from "./Parameter.module.scss";

interface ParameterProps {
  childNode: TreeNode;
}

export const Parameter: React.FunctionComponent<ParameterProps> = ({
  childNode,
}) => (
  <div className={styles.parameter}>
    <div className={styles.header}>
      <span className={styles.path}>{childNode.path}</span>

      <Label
        as="span"
        className={styles.parameterType}
        content={childNode.parameter!.Type}
        icon={childNode.parameter!.Type === "SecureString" ? "lock" : undefined}
      />

      <Button.Group className={styles.controls}>
        <Button icon="pencil" className={styles.editButton} />
        <Button icon="trash" className={styles.deleteButton} />
      </Button.Group>
    </div>

    <div className={styles.description}>
      <pre>{childNode.parameter!.Value}</pre>
    </div>
  </div>
);
