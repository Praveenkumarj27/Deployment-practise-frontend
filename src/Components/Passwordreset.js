import React from "react";
import { config } from "./config";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Passwordreset() {
  let navigate=useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${config.api}/resetpassword`, values);
      alert(user.data.message);
    },
  });

  return (
    <div className="container">
      <div className="col-lg-12">
        <h4 style={{ marginTop: "100px", marginLeft: "220px" }}>
          Password Reset
        </h4>
        <div
          className="row"
          style={{
            marginLeft: "190px",
            marginRight: "370px",
            borderRadius: "25px",
            marginTop: "10px",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            paddingLeft: "30px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <div class="col-lg-8">
              <label for="exampleInputEmail1" class="form-label">
                Enter mail address to confirm:
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
            <Link to="/" className="btn btn-danger mt-3">
              Back
            </Link>
            <button
              type="submit"
              class="btn btn-primary mt-3"
              style={{ marginLeft: "20px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Passwordreset;
