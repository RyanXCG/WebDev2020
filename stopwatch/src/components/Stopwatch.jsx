import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    started: false,
    timePassed: 0,
    startTime: 0,
  };

  startTimer = () => {
    this.setState({
      started: true,
      timePassed: this.state.timePassed,
    });
    this.timer = setInterval(() => {
      this.setState({
        timePassed: this.state.timePassed + 1,
      });
    }, 1000);
  };

  stopTimer = () => {
    this.setState({
      started: false,
    });
    clearInterval(this.timer);
  };

  reset = () => {
    this.setState({
      timePassed: 0,
    });
  };

  render() {
    return (
      <div className="Stopwatch">
        <h1>Stop watch</h1>
        {this.state.timePassed}
        <button onClick={this.state.started ? this.stopTimer : this.startTimer}>
          {this.state.started ? "stop" : "start"}
        </button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Stopwatch;
