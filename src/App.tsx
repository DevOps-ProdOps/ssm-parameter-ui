import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Container, Grid, Header, Menu } from "semantic-ui-react";
import { MenuItem } from "./MenuItem";
import styles from "./App.module.scss";
import "./parameters";
import { ParameterTree } from "./ParameterTree";
import { Setup } from "./Setup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Container>
            <Grid>
              <Grid.Row className={styles.header}>
                <Grid.Column>
                  <Header as="h1">SSM Parameter UI</Header>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Menu>
                    <MenuItem path="/" exactMatch name="Home" />
                    <MenuItem path="/setup" name="Setup" />
                  </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Route exact path="/" component={() => <ParameterTree />} />
            <Route exact path="/setup" component={() => <Setup />} />
          </Container>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
