import React, { Component } from "react";
import axios from "axios";

// dummy data

class UserList extends Component {
  constructor(props) {
    super(props);
    // get the users information
    this.state = {
      users: [],
      location: "",
      followers: "",
      following: "",
    };
  }

  componentDidMount() {
    let axi = axios.get("https://api.github.com/users?per_page=100");
    axi.then((response) => {
      this.setState({ users: response.data });
      //console.log(this.state.users);
    });
  }

  onUserSelected = (user) => {
    console.log(user.id);
    // get user detial
    let userUrl = "https://api.github.com/users/" + user.login;
    //console.log(userUrl);
    let axi = axios.get(userUrl);
    axi.then(
      (response) => {
        console.log("location: " + response.data.location);
        const { location, followers, following } = response.data;
        this.setState({ location, followers, following });
      },
      (error) => {
        console.log("error");
      }
    );
  };

  render() {
    return (
      <div id="container">
        <div id="left">
          <h1>List</h1>
          <ul>
            {this.state.users.map((user) => (
              <li key={user.id} onClick={() => this.onUserSelected(user)}>
                {user.id} {user.login + " "}
                <img
                  src={user.avatar_url}
                  alt="HTML5 Icon"
                  width="50"
                  height="50"
                />
              </li>
            ))}
          </ul>
        </div>
        <div id="right">
          <h1>Detail</h1>
          <p>
            location: {this.state.location}
            <br></br>
            followers: {this.state.followers}
            <br></br>
            following: {this.state.following}
            <br></br>
          </p>
        </div>
      </div>
    );
  }
}

export default UserList;
