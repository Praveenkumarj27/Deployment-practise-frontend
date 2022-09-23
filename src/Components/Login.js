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
      <div className="col-lg-12">
        <h2
          className="text-center"
          style={{
            marginLeft: "390px",
            marginTop: "80px",
            background: "#fe8a02",
            marginRight: "500px",
            padding: "10px 0px 10px 0px",
            color: "white",
            fontSize:"1.8rem"
          }}
        >
         SIGN IN
        </h2>
        <div
          className="row"
          style={{
            marginLeft: "390px",
            marginRight: "500px",
            background: "white",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
            paddingLeft: "50px",
            paddingTop: "30px",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <div class="col-lg-10">
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
            <div class="col-lg-10">
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

            <button type="submit" class="btn btn-primary col-lg-10">
              Submit
            </button>

            <div class="mb-5 py-3">
              <p class="form-label">
                Don't have account  {" "}
                <Link style={{ textDecoration: "none" }} to="/register">
                    Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
