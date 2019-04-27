import React, { useState } from "react";
import { Modal, Form, Button, Select, Message } from "semantic-ui-react";
import { AWSError, Request, SSM } from "aws-sdk";
import {
  putParameter as ssmPutParameter,
  TreeNode,
} from "../services/parameters";
import { hasErrored, Loadable } from "../state/reducer";

export interface EditModalProps {
  // children: React.ReactNode;
  parameter?: SSM.Parameter; // edit mode
  putParameter?: (
    params: SSM.Types.PutParameterRequest
  ) => Request<SSM.Types.PutParameterResult, AWSError>;
  path?: string; // create mode
}

export type ConnectedEditModalProps = EditModalProps &
  Loadable<TreeNode> & {
    update: (request: SSM.PutParameterRequest) => void;
  };

export const EditModal: React.FunctionComponent<ConnectedEditModalProps> = ({
  children,
  parameter,
  putParameter = ssmPutParameter,
  path,
  update,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const [type, setType] = useState<string>(
    parameter ? parameter.Type! : "String"
  );
  const [name, setName] = useState<string>(
    parameter ? parameter.Name! : path || ":"
  );
  const [value, setValue] = useState<string>(parameter ? parameter.Value! : "");

  // const [submitting, setSubmitting] = useState<boolean>(false);
  // const [error, setError] = useState<Error | null>(null);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      trigger={React.cloneElement(children as any, {
        onClick: () => setOpen(true),
      })}
    >
      <Modal.Header>{parameter ? "Update" : "Create"} parameter</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form
            onSubmit={() =>
              update({
                Name: name,
                Type: type,
                Value: value,
                Overwrite: !!parameter,
              })
            }
          >
            <Form.Field>
              <label>Name</label>
              <input
                name="name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Sensitive value?</label>
              <Select
                name="type"
                placeholder="Encrypt the value?"
                options={[
                  { key: "SecureString", text: "Yes", value: "SecureString" },
                  { key: "String", text: "No", value: "String" },
                ]}
                value={type}
                onChange={(_event, { value }) => setType(value as string)}
              />
            </Form.Field>
            <Form.Field>
              <label>Value</label>
              <input
                name="value"
                placeholder="Value"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </Form.Field>
            {hasErrored(props) && (
              <Message negative>
                <Message.Header>Error</Message.Header>
                <pre>{props.error.stack}</pre>
              </Message>
            )}
            <Button
              type="submit"
              loading={props.loading}
              disabled={props.loading}
            >
              Save
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
