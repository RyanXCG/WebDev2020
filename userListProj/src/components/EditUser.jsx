import React, { Component } from "react";
import { updateUser } from "../actions/userActions";
import { connect } from "react-redux";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstNameInput: "",
      lastNameInput: "",
      sexInput: "",
      ageInput: "",
      passwordInput: "",
      history: null,
    };
  }

  componentDidMount() {
    const { id, firstName, lastName, sex, age } = this.props.match.params;
    this.setState({
      id: id,
      firstNameInput: firstName,
      lastNameInput: lastName,
      sexInput: sex,
      ageInput: age,
      history: this.props.history,
    });
  }

  onFirstNameInputChange = (e) => {
    this.setState({ firstNameInput: e.target.value });
  };

  onLastNameInputChange = (e) => {
    this.setState({ lastNameInput: e.target.value });
  };

  onSexInputChange = (e) => {
    this.setState({ sexInput: e.target.value });
  };

  onAgeInputChange = (e) => {
    this.setState({ ageInput: e.target.value });
  };

  onPasswordInputChange = (e) => {
    this.setState({ passwordInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.updateUser(this.state);
  };

  render() {
    return (
      <div>
        <h1> Edit User</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <br></br>
          <input
            value={this.state.firstNameInput}
            onChange={this.onFirstNameInputChange}
          ></input>
          <br></br>
          <label>Last Name: </label>
          <br></br>
          <input
            value={this.state.lastNameInput}
            onChange={this.onLastNameInputChange}
          ></input>
          <br></br>
          <label>Sex: </label>
          <br></br>
          <input
            value={this.state.sexInput}
            onChange={this.onSexInputChange}
          ></input>
          <br></br>
          <label>Age: </label>
          <br></br>
          <input
            value={this.state.ageInput}
            onChange={this.onAgeInputChange}
          ></input>
          <br></br>
          <label>Password: </label>
          <br></br>
          <input
            value={this.state.passwordInput}
            onChange={this.onPasswordInputChange}
          ></input>
          <br></br>
          <button type="submit">Update User</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (input) => {
      dispatch(updateUser(input));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
