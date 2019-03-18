import React, { useState } from "react";
import { Modal, Form, Button, Select } from "semantic-ui-react";
import { SSM } from "aws-sdk";

interface EditModalProps {
  children: React.ReactNode;
  parameter?: SSM.Parameter;
}

export const EditModal: React.FunctionComponent<EditModalProps> = ({
  children,
  parameter,
}) => {
  const [type, setType] = useState(parameter ? parameter.Type : "String");
  const [name, setName] = useState(parameter ? parameter.Name : "");
  const [value, setValue] = useState(parameter ? parameter.Value : "");

  // if (parameter) {
  //   setType(parameter.Type);
  //   setName(parameter.Name);
  //   setValue(parameter.Value);
  // }

  return (
    <Modal trigger={children}>
      <Modal.Header>{parameter ? "Update" : "Create"} parameter</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={values => console.log(values)}>
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
            <Button type="submit">Save</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
