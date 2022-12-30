import React, { Component } from "react";

export default class Errorr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  handler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    if (this.state.counter === 4) {
      throw new Error("noooooooo😫");
    }
    return <h1 onClick={this.handler}>{this.state.counter}</h1>;
  }
}
