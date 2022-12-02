import React, { Component } from "react";
import axios from "axios";
import C11 from "./c11";

export default class C1 extends Component {
  state = {
    racods: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((x) => {
      this.setState({ racods: x.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.racods.map((e) => {
          return <C11 data={e}></C11>;
        })}
      </div>
    );
  }
}
