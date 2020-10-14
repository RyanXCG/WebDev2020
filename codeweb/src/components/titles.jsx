import React, { Component } from "react";
import axios from "axios";

// dummy data

class titles extends Component {
  constructor(props) {
    super(props);
    // get the users information
    console.log("test");
    this.state = {
      titles: [],
    };
  }

  componentDidMount() {
    let axi = axios.get("http://api.haochuan.io/oj/problems");
    axi.then((response) => {
      console.log("test");
      this.setState({ titles: response.data });
      //console.log(this.state.titles);
    });
  }

  onTitleSelected = (title) => {
    console.log(title.id);
    this.props.history.push("/" + title.id);
  };

  render() {
    return (
      <div>
        <h1>Titles</h1>
        <ul>
          {this.state.titles.map((title) => (
            <li key={title.id} onClick={() => this.onTitleSelected(title)}>
              {title.id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default titles;
