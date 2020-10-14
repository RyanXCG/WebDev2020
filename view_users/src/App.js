import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";

//import axios from "axios";
import UserList from "./components/userList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
    this.setAuthenTrue = this.setAuthenTrue.bind(this);
  }

  // a function pass down to login page
  setAuthenTrue() {
    this.setState({ authenticated: true });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} authenticated={this.state.authenticated} />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} setAuthenTrue={this.setAuthenTrue} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
