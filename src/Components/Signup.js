import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { config } from "./config";

function Signup() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const register = await axios.post(`${config.api}/register`, values);
        alert(register.data.message);
        navigate("/");
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
          <h2>SIGN UP</h2>
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
                padding: "2px 10px 2px 40px",
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
                <label for="exampleInputEmail1" class="form-label mt-2">
                  Email address:<span id="emailHelp" class="form-text"></span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
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
              </div>

              <button type="submit" class="btn btn-primary mt-2">
                Submit
              </button>

              <div class="mb-5 py-3">
                <p class="form-label">
                  Already have an account ?
                  <Link style={{ textDecoration: "none" }} to="/">
                    Login
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

export default Signup;
