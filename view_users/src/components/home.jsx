import React, { Component } from "react";
import NavBar from "./navbar";
// only logged in user can see /list and /list/:userId

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.authenticated) {
      this.props.history.push("/login");
    }

    return (
      <div>
        <NavBar />
        <h1>Home</h1>
        <p> this is a react login / view other users application </p>
      </div>
    );
  }
}

export default Home;
