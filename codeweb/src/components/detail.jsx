import React, { Component } from "react";
import axios from "axios";

class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
    };
  }

  componentDidMount() {
    // get info
    let question = "https://api.github.com/users/" + this.props.match.params.id;
    let axi = axios.get(question);
    axi.then(
      (response) => {
        this.setState({ title: response.data.title });
      },
      (error) => {
        console.log("error");
      }
    );
  }

  render() {
    return (
      <div>
        <p>this.state.title</p>
      </div>
    );
  }
}

export default detail;
