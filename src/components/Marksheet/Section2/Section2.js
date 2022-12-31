import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <div>
      <p>Serial No: 0527</p>
      <div className="section2Div">
        <h2 style={{fontFamily:'Playfair Display, serif', fontSize:'26px', fontWeight:'600'}}>UTTARAKHAND TECHNICAL UNIVERSITY, DEHRADUN</h2>
        <h3 style={{fontFamily:'Playfair Display, serif', fontSize:'22px', fontWeight:'600'}}>STATEMENT OF PROVISIONAL MARKS</h3>
        <p style={{fontFamily:'Playfair Display, serif', fontSize:'20px', fontWeight:'600'}}>B.Tech V Semester (CSE)</p>
      </div>
      <div>
        <p style={{fontFamily:'Playfair Display, serif', fontSize:'17px'}}>
          <b>Institute Name:</b> Birla Institute of Applied Sciences, Bhimtal
        </p>
        <div style={{display:'flex', justifyContent:'space-between', margin:'-10px 0px'}}>
          <p style={{fontFamily:'Playfair Display, serif', fontSize:'17px'}}>
            <b>Student Name: MUSKAN GOEL</b>
          </p>
          <p style={{fontSize:'17px'}}>
            <b style={{fontFamily:'Playfair Display, serif', fontSize:'17px'}}>Roll No.:</b> 190050101038
          </p>
        </div>

        <p style={{fontFamily:'Playfair Display, serif', fontSize:'17px'}}>
          <b>Father's Name: ISHWARI DUTT GOEL</b>
        </p>
      </div>
    </div>
  );
}

export default Section2;
