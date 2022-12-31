import React from "react";

function Section4() {
  return (
    <div style={{marginTop:'-10px'}}>
      <div style={{display:'flex', justifyContent:'right'}}>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <h6>Grand Total</h6>
          &emsp;&emsp;
          <h6>1000</h6>
          &emsp;&emsp;
        </div>
        <div style={{display:'flex'}}>
          <div style={{ justifyContent: "left", marginRight:'20px' }}>
            <h6>Total Marks</h6>
            <h6>% of Marks</h6>
          </div>
          <div style={{ justifyContent: "right" }}>
            <h6 style={{float:'right'}}>904</h6>
            <h6>90.40</h6>
          </div>
        </div>
      </div>

      <br />
      <div>
        <p>*Marks as Per University Cross List</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop:'100px' }}>
        <h5>Examination Cell</h5>
        <h5>Director/Dy.Registrar</h5>
      </div>
    </div>
  );
}

export default Section4;
