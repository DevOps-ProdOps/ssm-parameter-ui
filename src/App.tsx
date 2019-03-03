import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Container, Grid, Header, Menu } from "semantic-ui-react";
import { MenuItem } from "./MenuItem";
import styles from "./App.module.scss";
import "./parameters";
import { ParameterTree } from "./ParameterTree";

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
                    <MenuItem path="/away" name="Away" />
                  </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Route exact path="/" component={() => <ParameterTree />} />
            <Route exact path="/away" component={() => <span>Away</span>} />
          </Container>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
