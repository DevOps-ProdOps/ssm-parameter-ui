import React from "react";
import { TreeNode } from "./parameters";
import { List } from "semantic-ui-react";
import { Parameter } from "./Parameter";

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
    <List.Item>
      <List.Icon name="folder" />
      <List.Content>
        <List.Header>{node.path}</List.Header>
        <List.Description>{fullPath}</List.Description>
        <List.List>
          {Object.entries(node.children).map(([path, childNode]) => (
            <React.Fragment key={path}>
              {childNode.parameter && (
                <Parameter childNode={childNode} />
              )}
              {Object.keys(childNode.children).length >= 1 && (
                <ParameterNode
                  key={path}
                  node={childNode}
                  parentPath={fullPath}
                />
              )}
            </React.Fragment>
          ))}
        </List.List>
      </List.Content>
    </List.Item>
  );
};
