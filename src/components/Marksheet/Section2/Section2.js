import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <div>
      <p>Serial No: 0527</p>
      <div className="section2Div">
        <h2>UTTARAKHAND TECHNICAL UNIVERSITY, DEHRADUN</h2>
        <h3>STATEMENT OF PROVISIONAL MARKS</h3>
        <p>B.Tech V Semester (CSE)</p>
      </div>
      <div>
        <p>
          <b>Institute Name:</b> Birla Institute of Applied Sciences, Bhimtal
        </p>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <p>
            <b>Student Name:</b> MUSKAN GOEL
          </p>
          <p>
            <b>Roll No.:</b> 190050101038
          </p>
        </div>

        <p>
          <b>Father's Name:</b> ISHWARI DUTT GOEL
        </p>
      </div>
    </div>
  );
}

export default Section2;
