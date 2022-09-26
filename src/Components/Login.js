import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "./config";

function Login() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const user = await axios.post(`${config.api}`, values);
        localStorage.setItem("react_app_token", user.data.token);
        alert(user.data.message);
        if (user.data.message === "Successfully Logged In!!") {
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-4"
          style={{
            background: "#fe8a02",
            textAlign: "center",
            margin: "80px 780px 0px 390px",
            color: "white",
            padding: "4px",
          }}
        >
          <h2>SIGN IN</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="row">
            <form
              onSubmit={formik.handleSubmit}
              style={{
                background: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                margin: "0px 200px 0px 390px",
                padding: "2px 10px 2px 60px",
              }}
            >
              <div class="col-lg-9">
                <label for="username" class="form-label mt-2">
                  UserName:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </div>
              <div class="col-lg-9">
                <label for="exampleInputPassword1" class="form-label mt-2">
                  Password:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <p className="form-label">
                  <Link
                    className="mt-2"
                    style={{ textDecoration: "none" }}
                    to="/resetpassword"
                  >
                    {" "}
                    Forgot Password?
                  </Link>
                </p>
              </div>

              <button type="submit" class="btn btn-primary col-lg-9">
                Submit
              </button>

              <div class="col-lg mb-5 py-3">
                <p class="form-label">
                  Don't have account{" "}
                  <Link style={{ textDecoration: "none" }} to="/register">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
