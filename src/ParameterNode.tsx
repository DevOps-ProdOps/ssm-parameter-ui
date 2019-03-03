import React from "react";
import { TreeNode } from "./parameters";
import { List } from "semantic-ui-react";

export interface ParameterNodeProps {
  node: TreeNode;
}

export const ParameterNode: React.FunctionComponent<ParameterNodeProps> = ({
  node,
}) => {
  return (
    <List>
      <List.Item>
        <List.Icon name="folder" />
        <List.List>
          <List.Header>{node.path}</List.Header>
          {Object.entries(node.children).map(([path, childNode]) => (
            <>
              {childNode.parameter && (
                <List.Item>
                  <List.Icon name="file" />
                  <List.Content>
                    <List.Header>{childNode.path}</List.Header>
                    <List.Description>
                      {childNode.parameter.Value} ({childNode.parameter.Type})
                    </List.Description>
                  </List.Content>
                </List.Item>
              )}
              {Object.keys(childNode.children).length >= 1 && (
                <ParameterNode key={path} node={childNode} />
              )}
            </>
          ))}
        </List.List>
      </List.Item>
    </List>
  );
};
