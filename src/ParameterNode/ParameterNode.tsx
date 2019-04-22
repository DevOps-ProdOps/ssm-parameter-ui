import React from "react";
import { TreeNode } from "../services/parameters";
import { Button, Icon } from "semantic-ui-react";
import { Parameter } from "../Parameter/Parameter";
import styles from "./ParameterNode.module.scss";
import * as _ from "lodash";
import { EditModal } from "../EditModal/EditModal";

export interface ParameterNodeProps {
  node: TreeNode;
  parentPath?: string;
}

export const ParameterNode: React.FunctionComponent<ParameterNodeProps> = ({
  node,
  parentPath,
}) => {
  const fullPath = parentPath ? parentPath + node.path + "/" : node.path;

  return (
    <div className={styles.parameterNode}>
      <div className={styles.header}>
        <Icon name="folder" />

        <div className={styles.info}>
          <div className={styles.name}>{node.path}</div>
          <div className={styles.description}>{fullPath}</div>
        </div>

        <Button.Group className={styles.controls}>
          <EditModal path={fullPath}>
            <Button icon="plus" className={styles.createButton} />
          </EditModal>
        </Button.Group>
      </div>

      <div className={styles.children}>
        {_.map(
          _.orderBy(
            node.children,
            c => {
              // Show parameters before folders (prioritise params with a _)
              if (Object.keys(c.children).length >= 1) {
                return c.path;
              } else {
                return `_${c.path}`;
              }
            },
            "asc"
          ),
          (childNode, path) => (
            <React.Fragment key={path}>
              {childNode.parameter && <Parameter childNode={childNode} />}
              {Object.keys(childNode.children).length >= 1 && (
                <ParameterNode
                  key={path}
                  node={childNode}
                  parentPath={fullPath}
                />
              )}
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};
