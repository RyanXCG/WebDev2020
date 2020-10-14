import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// only logged in user can see /list and /list/:userId

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/userList">User List</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
