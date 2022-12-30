import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h3>Provisional Mark Sheet Generator</h3>
      <div className="homeDiv">
        <div style={{display:'flex'}}>
          <div style={{textAlign:'left', marginLeft:'15px'}}>
            <label style={{margin:"6px auto"}}>Batch:-</label>
            <label style={{margin:"6px auto"}}>Branch:-</label>
            <label style={{margin:"6px auto"}}>Sem:-</label>
            <label style={{margin:"6px auto"}}>Roll No.:-</label>
          </div>
          <div>
            <input type="text" style={{margin:"3px auto"}} />
            <input type="text" style={{margin:"3px auto"}} />
            <input type="text" style={{margin:"3px auto"}} />
            <input type="text" style={{margin:"3px auto"}} />
          </div>
        </div>
        <Link to="/result" >
          <button className="submitBtn">View Result</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
