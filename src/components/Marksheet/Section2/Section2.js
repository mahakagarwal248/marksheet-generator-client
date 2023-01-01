import React from "react";
import "./Section2.css";

function Section2({data}) {
  return (
    <div>
      <p>Serial No: 0527</p>
      <div className="section2Div">
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "26px",
            fontWeight: "600",
          }}
        >
          UTTARAKHAND TECHNICAL UNIVERSITY, DEHRADUN
        </h2>
        <h3
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          STATEMENT OF PROVISIONAL MARKS
        </h3>
        <p
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          {`${data.course} ${data.semester} (${data.branch})`}
        </p>
      </div>
      <div>
        <p style={{ fontFamily: "Playfair Display, serif", fontSize: "17px" }}>
          <b>Institute Name:</b> Birla Institute of Applied Sciences, Bhimtal
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "-10px 0px",
          }}
        >
          <p
            style={{ fontFamily: "Playfair Display, serif", fontSize: "17px" }}
          >
            <b>Student Name: {data.name}</b>
          </p>
          <p style={{ fontSize: "17px" }}>
            <b
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "17px",
              }}
            >
              Roll No.
            </b>
            <b>: {data.rollNo}</b>
          </p>
        </div>
        <p style={{ fontFamily: "Playfair Display, serif", fontSize: "17px" }}>
          <b>Father's Name: {data.fatherName}</b>
        </p>
      </div>
    </div>
  );
}

export default Section2;
