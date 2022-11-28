import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

let val = yup.object().shape({
  name: yup
    .string()
    .required("plaese")
    .max(10)
    .matches(/^[a-z]+$/, "hal hal ammm"),
});
export default function Prac() {
  return (
    <Formik
      initialValues={{ name: "", lname: "", hobbi: "", chack: [] }}
      validationSchema={val}
      onSubmit={(e) => {
        console.log(e);
      }}
    >
      <Form className=" justify-content-center  w-50">
        <label>name:</label>
        <Field type="text" className="form-control" name="name" />
        <ErrorMessage name="name" />
        <label>lname:</label>
        <Field type="text" className="form-control" name="lname" />
        <br />
        <Field as="select" name="hobbi" className="form-control">
          <option value="ravi">ravi</option>
          <option value="rajan">rajan</option>
          <option value="rohan">rohan</option>
          <option value="ravi">ravi</option>
        </Field>
        <br />
        <Field type="checkbox" name="chack" value="cricket" />
        cricket
        <Field type="checkbox" name="chack" value="rajan" />
        rajan
        <Field type="checkbox" name="chack" value="ravi" />
        ravi
        <input type="submit" className="btn btn-danger form-control" />
      </Form>
    </Formik>
  );
}
