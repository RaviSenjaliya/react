import React, { Component } from "react";
import ClassTask2 from "./ClassTask2";

class ClassTask extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      formData: {
        Fname: "",
        Lname: "",
        age: "",
        addres: {
          Apartment: "",
          city: "",
          country: "",
        },
      },
    };
  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onclickk = (e) => {
    e.preventDefault();
    let val = [...this.array];
    val.push(this.formData);
    this.setState({ ...this.state, array: val });
    console.log(this.state);
  };
  render() {
    return (
      <div className="w-50">
        <form onSubmit={this.onclickk}>
          <label className="form-label">First Name</label>
          <input type="text" name="Fname" onChange={this.change} />
          <label className="form-label">last Name</label>
          <input type="text" name="Lname" onChange={this.change} />
          <label className="form-label">age</label>
          <input type="text" name="age" onChange={this.change} />

          {/* -------------------------- */}
          <div className="roow">
            <label className="form-label">Apartment</label> <br />
            <input
              className="col-sm-4"
              type="text"
              name="Apartment"
              onChange={this.change}
            />
            <br />
            <label className="form-label">city</label> <br />
            <input
              className="col-sm-4"
              type="text"
              name="city"
              onChange={this.change}
            />
            <br />
            <label className="form-label">country</label> <br />
            <input
              className="col-sm-4"
              type="text"
              name="country"
              onChange={this.change}
            />
          </div>
          <input type="submit" value="submit" />
        </form>
        {/* <p>{this.state.Fname}</p> */}
        <ClassTask2 />
      </div>
    );
  }
}

export default ClassTask;
