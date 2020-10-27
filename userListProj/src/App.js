import React, { Component } from "react";
import UserList from "./components/UserList";
//import {connect} from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact={true} path="/" component={UserList} />
          <Route exact={true} path="/createUser" component={CreateUser} />
          <Route
            path="/:id/:firstName/:lastName/:sex/:age"
            component={EditUser}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
