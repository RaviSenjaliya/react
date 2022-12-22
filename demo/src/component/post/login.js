import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const show = useNavigate();
  const Datadisplay = (e) => {
    let data = localStorage.getItem("user");
    let x = JSON.parse(data);

    axios
      .get("http://localhost:4000/accounts", {
        headers: {
          Authorization: "Bearer " + x?.jwtToken,
        },
      })
      .then((y) => {
        console.log(y.data);
      })
      .catch((y) => {
        console.log(y);
      });
  };
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
              localStorage.setItem("user", JSON.stringify(y.data));
              show("/product");
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
          <button onClick={Datadisplay}>Display</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
