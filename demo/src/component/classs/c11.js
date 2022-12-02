import React, { Component } from "react";
import PropTypes from "prop-types";

export default class C11 extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <td>{this.props.data.name}</td>
          </tr>
          <tr>
            <th>email</th>
            <td>{this.props.data.email}</td>
          </tr>
          <tr>
            <th>body</th>
            <td>{this.props.data.body}</td>
          </tr>
        </table>
      </div>
    );
  }
}
