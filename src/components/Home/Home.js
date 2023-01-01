import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSem] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleClick = async () => {
    if (!rollNo || !semester || !batch || !branch) {
      window.alert("Please fill all the details!");
    } else {
      await axios
        .post("http://localhost:8000/user/get-result", { semester, rollNo })
        .then((response) => {
          navigate("/result", { state: response.data });
        })
        .catch((error) => {
          if (error.response.status === 404) {
            window.alert("Invalid Credentials!");
          }
        });
    }
  };

  return (
    <div className="container">
      <h3 style={{ marginBottom: "30px", marginTop: "30px" }}>
        Provisional Mark Sheet Generator
      </h3>
      <div className="homeDiv">
        <div style={{ display: "flex" }}>
          <div style={{ textAlign: "left", marginLeft: "15px" }}>
            <label style={{ margin: "6px auto" }}>Batch:-</label>
            <label style={{ margin: "6px auto" }}>Branch:-</label>
            <label style={{ margin: "6px auto" }}>Sem:-</label>
            <label style={{ margin: "6px auto" }}>Roll No.:-</label>
          </div>
          <div>
            <input
              type="text"
              style={{ margin: "3px auto" }}
              onChange={(e) => setBatch(e.target.value)}
            />
            <input
              type="text"
              style={{ margin: "3px auto" }}
              onChange={(e) => setBranch(e.target.value)}
            />
            <select
              value={semester}
              onChange={(e) => setSem(e.target.value)}
              style={{ margin: "3px auto", padding: "3px", width: "72%" }}
            >
              <option value="" hidden>
                select
              </option>
              <option value="1st SEMESTER">1st SEMESTER</option>
              <option value="2nd SEMESTER">2nd SEMESTER</option>
              <option value="3rd SEMESTER">3rd SEMESTER</option>
              <option value="4th SEMESTER">4th SEMESTER</option>
              <option value="5th SEMESTER">5th SEMESTER</option>
              <option value="6th SEMESTER">6th SEMESTER</option>
              <option value="7th SEMESTER">7th SEMESTER</option>
              <option value="8th SEMESTER">8th SEMESTER</option>
            </select>
            {/* <input
              type="text"
              style={{ margin: "3px auto" }}
              onChange={(e) => setSem(e.target.value)}
            /> */}
            <input
              type="text"
              style={{ margin: "3px auto" }}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
        </div>
        <button className="submitBtn" onClick={handleClick}>
          View Result
        </button>
      </div>
    </div>
  );
}

export default Home;
