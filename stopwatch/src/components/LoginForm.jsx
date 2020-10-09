import React, { Component } from "react";

class loginForm extends Component {
  state = {
    name: "",
    password: "",
    loginSuccess: false,
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    // check user name and password
    if (this.state.name === "today" && this.state.password === "123456") {
      this.setState({ loginSuccess: true });
    }
  };

  handleLogout = (e) => {
    e.preventDefault();
    // check user name and password
    this.setState({ loginSuccess: false });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.onNameChange}
          ></input>
          <br></br>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          ></input>
          <button
            onClick={
              this.state.loginSuccess ? this.handleLogout : this.handleLogin
            }
          >
            {this.state.loginSuccess ? "log out" : "log in"}
          </button>
          <h1>{this.state.loginSuccess ? "Welcome" : "Please Login"}</h1>
        </form>
      </div>
    );
  }
}

export default loginForm;
