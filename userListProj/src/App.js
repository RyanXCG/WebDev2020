import React, { Component } from "react";
import logo from "./logo.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websites: [
        {
          id: 1,
          up: 227,
          down: 14,
          url: "some url 1",
          description: "some detail 1 ",
        },
        {
          id: 2,
          up: 227,
          down: 14,
          url: "some url 2",
          description: "some detail 2",
        },
        {
          id: 3,
          up: 227,
          down: 14,
          url: "some url 3",
          description: "some detail 3",
        },
        {
          id: 4,
          up: 227,
          down: 14,
          url: "some url 4",
          description: "some detail 4",
        },
      ],
    };
  }

  onUpvoteClicked = (website) => {
    let newWebsites = [...this.state.websites];
    newWebsites.find((ele) => ele.id === website.id).up++;
    this.setState({ websites: newWebsites });
  };

  onDownClicked = (website) => {
    let newWebsites = [...this.state.websites];
    newWebsites.find((ele) => ele.id === website.id).down++;
    this.setState({ websites: newWebsites });
  };

  render() {
    return (
      <div className="App">
        <h1> Please vote for your favorite website</h1>
        <ul>
          {this.state.websites.map((website) => (
            <li key={website.id}>
              <button onClick={() => this.onUpvoteClicked(website)}>
                upvote
              </button>{" "}
              {website.up}{" "}
              <button onClick={() => this.onDownClicked(website)}>
                downvote
              </button>{" "}
              {website.down} {website.url} {website.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
