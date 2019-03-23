import React, { useState } from "react";
import { Modal, Form, Button, Select, Message } from "semantic-ui-react";
import { AWSError, Request, SSM } from "aws-sdk";
import { putParameter as ssmPutParameter } from "./parameters";

interface EditModalProps {
  children: React.ReactNode;
  parameter?: SSM.Parameter; // edit mode
  putParameter?: (
    params: SSM.Types.PutParameterRequest
  ) => Request<SSM.Types.PutParameterResult, AWSError>;
  path?: string; // create mode
}

export const EditModal: React.FunctionComponent<EditModalProps> = ({
  children,
  parameter,
  putParameter = ssmPutParameter,
  path,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const [type, setType] = useState<string>(
    parameter ? parameter.Type! : "String"
  );
  const [name, setName] = useState<string>(
    parameter ? parameter.Name! : path || ":"
  );
  const [value, setValue] = useState<string>(parameter ? parameter.Value! : "");

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      trigger={React.cloneElement(children as any, { onClick: () => setOpen(true) })}
    >
      <Modal.Header>{parameter ? "Update" : "Create"} parameter</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form
            onSubmit={async () => {
              setSubmitting(true);

              try {
                await putParameter({
                  Name: name,
                  Type: type,
                  Value: value,
                  Overwrite: !!parameter,
                });

                setSubmitting(false);
                setOpen(false);
              } catch (err) {
                setError(err);
              }
            }}
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
                // disabled={!!parameter}
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
            {error && (
              <Message negative>
                <Message.Header>Error</Message.Header>
                <pre>{error.stack}</pre>
              </Message>
            )}
            <Button type="submit" loading={submitting} disabled={submitting}>
              Save
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
