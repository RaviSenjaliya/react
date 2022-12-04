import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  return (
    <div className="center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        // -----------------------------------------------------
        onSubmit={(e) => {
          axios
            .post("http://localhost:4000/accounts/authenticate", e)
            .then((y) => {
              console.log(y);
              toast("login successfully");
            })
            .catch((y) => {
              toast("404");
            });
        }}
      >
        <Form className="w-50 m-5">
          <Field type="text" className="form-control" name="email" />
          <Field type="text" className="form-control" name="password" />
          <input
            type="submit"
            value="submit"
            className="btn btn-danger form-control"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
