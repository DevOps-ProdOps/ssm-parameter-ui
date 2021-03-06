import React, { useEffect, useState } from "react";
import { Form, Grid } from "semantic-ui-react";
import { ConfigurationOptions } from "aws-sdk/lib/config";
import styles from "./Setup.module.scss";

const DEFAULT_OPTIONS: ConfigurationOptions = {
  region: "eu-west-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
};

export const CONFIG_KEY = "_ssm_parameter_ui_options";

export const Setup: React.FunctionComponent<{}> = () => {
  const [options, setOptions] = useState(
    JSON.stringify(DEFAULT_OPTIONS, null, 2)
  );

  useEffect(() => {
    const storedOpts = localStorage.getItem(CONFIG_KEY);
    setOptions(
      storedOpts ? storedOpts : JSON.stringify(DEFAULT_OPTIONS, null, 2)
    );
  }, []);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Form
            onSubmit={() => {
              const restringifyed = JSON.stringify(
                JSON.parse(options),
                null,
                2
              );
              localStorage.setItem(CONFIG_KEY, restringifyed);
              setOptions(restringifyed);
            }}
          >
            <Form.TextArea
              className={styles.options}
              label="Options"
              name="options"
              value={options}
              onChange={e => setOptions((e.target as any).value)}
              rows={10}
            />
            <Form.Button>Save</Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
