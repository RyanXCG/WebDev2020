import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import titles from "./components/titles";
import detail from "./components/detail";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" Component={titles} />
            <Route path="/:id" component={detail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
