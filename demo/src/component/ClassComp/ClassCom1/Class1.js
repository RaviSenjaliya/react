import React, { Component } from "react";
import Class1c from "./Class1c";

class Class1 extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      input: "",
    };
  }
  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clickk = (e) => {
    e.preventDefault();
    let val = [...this.state.array];
    val.push(this.state.input);
    this.setState({ ...this.state, array: val });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.clickk}>
          <input type="text" name="input" onChange={this.change} />
          <input type="submit" value="submit" />
        </form>
        {this.state.array}
        <Class1c />
      </div>
    );
  }
}

export default Class1;
