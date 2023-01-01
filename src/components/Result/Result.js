import React from "react";
import { useLocation } from "react-router-dom";

import "./Result.css";
import Header from "../Marksheet/Header/Header";
import Section2 from "../Marksheet/Section2/Section2";
import MarksTable from "../Marksheet/MarksTable/MarksTable";
import Section4 from "../Marksheet/Section4/Section4";

function Result() {
  const location = useLocation();
  const data = location.state
  const handleClick = () => {
    document.getElementById("btn").style.display = "none";
    window.print();
    document.getElementById("btn").style.display = "block";
  };

  return (
    <div>
      <div className="resultDiv" id="result">
        <Header />
        <Section2 data={data} />
        <MarksTable data={data} />
        <Section4 data={data}/>
      </div>
      <button className="downloadBtn" id="btn" onClick={handleClick}>
        Download PDF
      </button>
    </div>
  );
}

export default Result;
