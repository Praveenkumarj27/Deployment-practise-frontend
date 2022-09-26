import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "./config";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      rString: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${config.api}/reset-password-page`, values);
      alert(user.data.message);
      navigate("/");
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form
            onSubmit={formik.handleSubmit}
            style={{
              borderRadius: "25px",
              padding: "20px 50px ",
              background: "white",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginTop: "80px",
              marginLeft: "100px",
            }}
          >
            <div class="col-lg-9">
              <h3 style={{ marginLeft: "100px", color: "red" }}>
                Password Reset
              </h3>
              <label for="exampleInputEmail1" class="form-label">
                Enter Random String:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                name="rString"
                onChange={formik.handleChange}
                value={formik.values.rString}
              />
            </div>
            <div class="col-lg-9">
              <label for="exampleInputEmail1" class="form-label">
                Enter Email:{" "}
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div class="col-lg-9">
              <label for="exampleInputEmail1" class="form-label">
                Enter New Password:
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
