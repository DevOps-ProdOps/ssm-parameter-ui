import { SSM } from "aws-sdk";

const getParametersInternal = async (
  path: string,
  nextToken?: string
): Promise<SSM.ParameterList> => {
  const ssmClient = new SSM({
    region: "eu-west-1",
    credentials: JSON.parse(localStorage.getItem("credentials") || "{}"),
  });

  const params = await ssmClient
    .getParametersByPath({
      Path: path,
      WithDecryption: true,
      Recursive: true,
      MaxResults: 10,
      NextToken: nextToken,
    })
    .promise();

  if (params.NextToken) {
    return [
      ...(params.Parameters || []),
      ...(await getParametersInternal(path, params.NextToken)),
    ];
  } else {
    return params.Parameters || [];
  }
};

/**
 * Get all parameters stored in an account, making multiple API calls to page
 * through them.
 *
 * @param path
 */
export const getParameters = (path: string) => getParametersInternal(path);

export interface TreeNode {
  path: string;
  parameter?: SSM.Parameter;
  children: Record<string, TreeNode>;
}

/**
 * Take the flat parameter values returned by AWS and build up a tree of each
 * folder.
 *
 * @param parameters
 */
export const treeParameters = (parameters: SSM.ParameterList): TreeNode => {
  const TreeNode: TreeNode = {
    path: "/",
    children: {},
  };

  parameters.forEach(param => {
    const nameParts = param.Name!.split("/");

    // starts with a forward slash (not root param)?
    if (nameParts[0] === "") {
      // create top-level key if required
      if (!TreeNode.children[nameParts[1]]) {
        TreeNode.children[nameParts[1]] = {
          path: nameParts[1],
          children: {},
        };
      }

      let currentTreeTreeNode: TreeNode = TreeNode.children[nameParts[1]]; // = null;

      // skip first (empty) name part and top-level key
      for (let index = 2; index < nameParts.length; index++) {
        // create sub-key if required
        if (!currentTreeTreeNode.children[nameParts[index]]) {
          currentTreeTreeNode.children[nameParts[index]] = {
            path: nameParts[index],
            children: {},
          };
          currentTreeTreeNode = currentTreeTreeNode.children[nameParts[index]];
        } else {
          currentTreeTreeNode = currentTreeTreeNode.children[nameParts[index]];
        }

        if (index === nameParts.length - 1) {
          currentTreeTreeNode.parameter = param;
        }
      }
    } else {
      if (!TreeNode.children) {
        TreeNode.children = {};
      }

      TreeNode.children[nameParts[0]] = {
        path: nameParts[0],
        parameter: param,
        children: {},
      };
    }
  });

  return TreeNode;
};
