import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./Formm.css";
import * as yup from "yup";

let val = yup.object().shape({
  Fname: yup
    .string()
    .matches(/^[A-Z]+$/, "🙄 heyy")
    .required("😎")
    .max(10),
  Lname: yup
    .string()
    .matches(/^[a-z]+$/, "only small charactor requird")
    .required("he he he he")
    .max(6),
});
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
          select: "",
          skill: "",
          check: [],
        }}
        onSubmit={(v) => {
          console.log(v);
        }}
        validationSchema={val}
      >
        <div className="center top p-4 mt-5 text-white">
          <Form>
            <h2 className="text-white text-center">Booking Form</h2>
            <label>First Name:</label>
            <Field type="text" className="form-control" name="Fname" />
            <ErrorMessage name="Fname" />
            <br />
            <label>Last Name:</label>
            <Field type="text" className="form-control" name="Lname" />
            <ErrorMessage name="Lname" />
            <br />
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
            {/* =================================================== */}
            <Field as="select" name="select">
              <option value="ravi">ravi</option>
              <option value="rajan">rajan</option>
              <option value="milan">milan</option>
              <option value="ravi">ravi</option>
            </Field>
            {/* ================================================= */}
            <Field type="radio" name="skill" value="ravi" /> ravi
            <Field type="radio" name="skill" value="rajan" /> rajan
            <Field type="radio" name="skill" value="rohan" /> rohan
            <Field type="radio" name="skill" value="ravan" /> ravan <br />
            <br />
            {/* ========================================================== */}
            <Field type="checkbox" name="check" value="ravi" />
            ravi
            <Field type="checkbox" name="check" value="rajna" />
            rajan
            <Field type="checkbox" name="check" value="minesh" />
            minesh
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
