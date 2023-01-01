import React from "react";

function Section4({ data }) {
  let total = 0;
    Object.keys(data.Data[0]).map((ele) => (
      total = total + data.Data[0][ele].maxTotal
    ));
  return (
    <div style={{ marginTop: "-10px" }}>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <h6>Grand Total</h6>
          &emsp;&emsp;
          <h6>{total}</h6>
          &emsp;&emsp;
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ justifyContent: "left", marginRight: "20px" }}>
            <h6>Total Marks</h6>
            <h6>% of Marks</h6>
          </div>
          <div style={{ justifyContent: "right" }}>
            <h6 style={{ float: "right" }}>{data.grandTotal}</h6>
            <h6>{parseFloat(data.percentage).toFixed(2)}</h6>
          </div>
        </div>
      </div>

      <br />
      <div>
        <p>*Marks as Per University Cross List</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "100px",
        }}
      >
        <h5>Examination Cell</h5>
        <h5>Director/Dy.Registrar</h5>
      </div>
    </div>
  );
}

export default Section4;
