import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();
  let doLogout = () => {
    localStorage.removeItem("react_app_token");
    navigate("/");
  };
  return (
    <div
      className="container"
      style={{ marginLeft: "250px", marginTop: "100px" }}
    >
      <button
        class="btn btn-danger mt-3"
        onClick={doLogout}
        style={{ marginLeft: "800px" }}
      >
        Logout
      </button>
      <h2
        className="mt-3"
        style={{
          background: "white",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px 20px 20px 150px",
          marginRight: "400px",
          borderRadius: "25px",
        }}
      >
        Welcome to Deployment practise task
      </h2>
    </div>
  );
}

export default Dashboard;
