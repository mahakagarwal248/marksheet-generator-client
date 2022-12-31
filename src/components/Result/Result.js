import React from "react";

import "./Result.css";
import Header from "../Marksheet/Header/Header";
import Section2 from "../Marksheet/Section2/Section2";
import MarksTable from "../Marksheet/MarksTable/MarksTable";
import Section4 from "../Marksheet/Section4/Section4";

function Result() {
  const handleClick = () => {
    document.getElementById("btn").style.display = "none";
    window.print();
    document.getElementById("btn").style.display = "block";
  };

  return (
    <div>
      <div className="resultDiv" id="result">
        <Header />
        <Section2 />
        <MarksTable />
        <Section4 />
      </div>
      <button className="downloadBtn" id="btn" onClick={handleClick}>
        Download PDF
      </button>
    </div>
  );
}

export default Result;
