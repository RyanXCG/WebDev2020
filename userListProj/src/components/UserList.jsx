import React, { Component } from "react";
import { getUsers, deleteUser } from "../actions/userActions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const debounce = (cb, time) => {
  let ref;
  return (arg) => {
    clearTimeout(ref);
    ref = setTimeout(() => {
      cb(arg);
    }, time);
  };
};

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      search: "",
      sortMethod: "firstName",
      sortDir: 1,
    };
    this.getUsers = debounce(this.props.getUsers, 500);
  }

  componentDidMount() {
    this.props.getUsers(this.state);
  }

  onSearchInputChange = (e) => {
    this.setState({ search: e.target.value });
    this.getUsers({
      ...this.state,
      search: e.target.value,
    });
  };

  onSortButtonClicked = (button) => {
    this.setState({
      page: 1,
      sortMethod: button,
      sortDir: this.state.sortDir === 1 ? -1 : 1,
    });
    this.getUsers({
      ...this.state,
      page: 1,
      sortMethod: button,
      sortDir: this.state.sortDir === 1 ? -1 : 1,
    });
  };

  onPreviousClicked() {
    this.setState({ page: this.state.page - 1 });
    this.getUsers({
      ...this.state,
      page: this.state.page - 1,
    });
  }

  onNextClicked() {
    this.setState({ page: this.state.page + 1 });
    this.props.getUsers({
      ...this.state,
      page: this.state.page + 1,
    });
  }

  onDeleteClicked(id) {
    this.props.deleteUser(id);
  }

  onEditClicked(user) {
    this.props.history.push(
      `/${user._id}/${user.firstName}/${user.lastName}/${user.sex}/${user.age}`
    );
  }

  render() {
    const { isFetching, data, err } = this.props.users;
    if (isFetching || !data) {
      console.log("fetching");
      return <div>loading the data...</div>;
    } else {
      if (err) {
        return <div>There was an error to get the data</div>;
      } else {
        console.log(data.length);
        return (
          <div className="UserList">
            <h1>Users</h1>

            <form>
              <label>Search: </label>
              <input
                value={this.state.search}
                onChange={this.onSearchInputChange}
              ></input>
            </form>
            <table>
              <thead>
                <tr>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.onSortButtonClicked("firstName")}
                    >
                      First Name
                    </Button>
                  </th>
                  <th>
                    <button
                      onClick={() => this.onSortButtonClicked("lastName")}
                    >
                      Last Name
                    </button>
                  </th>
                  <th>
                    <button onClick={() => this.onSortButtonClicked("sex")}>
                      Sex
                    </button>
                  </th>
                  <th>
                    <button onClick={() => this.onSortButtonClicked("age")}>
                      Age
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td>
                        <button onClick={() => this.onEditClicked(user)}>
                          Edit
                        </button>
                      </td>
                      <td>
                        <button onClick={() => this.onDeleteClicked(user._id)}>
                          Delete
                        </button>
                      </td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.sex}</td>
                      <td>{user.age}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {data.length === 0 && <h3>No More Users</h3>}
            <br></br>
            {this.state.page !== 1 && (
              <button onClick={() => this.onPreviousClicked()}>previous</button>
            )}
            <button>{this.state.page}</button>

            {data.length == 5 && (
              <button onClick={() => this.onNextClicked()}>next</button>
            )}
            <br></br>
            <br></br>
            <button onClick={() => this.props.history.push("/createUser")}>
              Create New User
            </button>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (params) => {
      dispatch(getUsers(params));
    },
    deleteUser: (id) => {
      dispatch(deleteUser(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
