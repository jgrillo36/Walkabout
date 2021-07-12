import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl, } from "react-bootstrap";
import Favorites from "../Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Park from "../Park";
import Search from "../Search";

export class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    parks: [],
    stateCode: "",
  };
  _handleStateChange = (event) => {
    this.setState({
      stateCode: event.target.value,
    });
  };
  _handleSubmit = (e) => {
    e.preventDefault();
    console.log("button is working");
    fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=${this.state.stateCode}&api_key=9LM6ZhHeG6sKKnKjV5pzSRPS8b0DGfghndyl6m9a`
    )
      .then((response) => response.json())
      .then((natParkData) => {
        console.log(natParkData);
        this.setState({
          parks: natParkData.data,
        });
      });

    // after fetch dispatch to redux
  };

  render(props) {
    return (
      <>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">WalkAbout</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/favorites">Favorites</Link>
            </Nav>
            <Form inline onSubmit={(e) => this._handleSubmit(e)}>
              <FormControl
                type="text"
                placeholder="Enter State Name"
                name="stateName"
                onChange={(e) => this._handleStateChange(e)}
                className="mr-sm-2"
              />
              <Button type="submit" variant="outline-info">
                Search
              </Button>
            </Form>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Search parks={this.state.parks} />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/Park/:parkcode" component={Park} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default BaseLayout;