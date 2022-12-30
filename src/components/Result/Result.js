import React from "react";

import "./Result.css";
import Header from "../Marksheet/Header/Header";
import Section2 from "../Marksheet/Section2/Section2";
import MarksTable from "../Marksheet/MarksTable/MarksTable";

function Result() {
  return (
    <div className="container">
      <Header/>
      <Section2/>
      <MarksTable/>
    </div>
  );
}

export default Result;
