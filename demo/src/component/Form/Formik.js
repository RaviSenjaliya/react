import React from "react";
import { Formik, Field, Form } from "formik";
import "../Formm.css";

export default function FFormik() {
  return (
    <div>
      <Formik
        initialValues={{
          Fname: "",
          Lname: "",
          age: "",
          company: "",
          Title: "",
          departmant: "",
          Email: "",
          phone: "",
        }}
        onSubmit={(v) => {
          console.log(v);
        }}
      >
        <div className="center top p-4 mt-5">
          <Form>
            <h2 className="text-white text-center">Booking Form</h2>
            <label>First Name:</label>
            <Field type="text" className="form-control" name="Fname" />
            <label>Last Name:</label>
            <Field type="text" className="form-control" name="Lname" />
            <label>Age:</label>
            <Field type="text" className="form-control" name="age" />
            <label>company:</label>
            <Field type="text" className="form-control" name="company" />
            <label>Title:</label>
            <Field type="text" className="form-control" name="Title" />
            <label>departmant:</label>
            <Field type="text" className="form-control" name="departmant" />
            <label>Email:</label>
            <Field type="text" className="form-control" name="Email" />
            <label>phone:</label>
            <Field type="text" className="form-control" name="phone" />
            <br />
            <input
              type="submit"
              value="submit"
              className="btn btn-danger form-control"
            />
          </Form>
        </div>
      </Formik>
    </div>
  );
}
