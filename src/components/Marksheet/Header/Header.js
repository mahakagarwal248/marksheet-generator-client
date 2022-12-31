import React from "react";

import "./Header.css";

function Header() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src="/images/logo.jpeg"
          alt="logo"
          style={{ height: "150px", width: "150px", flex: "0.12" }}
        />
        <div style={{ flex: "0.88", textAlign: "center"}}>
          <div style={{ display: "flex", justifyContent:'end' }}>
            <div style={{ textAlign: "left", marginRight:'8px', color:'#2196c4',fontFamily:'ui-monospace',lineHeight:'normal'}}>
              <span>Phone:</span>
              <br />
              <span>Fax:</span>
              <br />
              <span>URL:</span>
              <br />
              <span>e-mail:</span>
              <br />
            </div>
            <div style={{textAlign:'left', color:'#2196c4',fontFamily:'ui-monospace',lineHeight:'normal'}}>
              <span>05942-247921</span>
              <br />
              <span>05942-247921</span>
              <br />
              <span>www.birlainstitue.co.in</span>
              <br />
              <span>info@birlainstitue.co.in</span>
              <br />
            </div>
          </div>
          <h1 style={{color:'#2196c4', fontWeight:'700',fontSize:'38px'}}>Birla Institute of Applied Sciences</h1>
          <p style={{color:'#2196c4', fontSize:'22px',marginTop:'-10px'}}>Bhimtal-263136, Distt. Nainital (Uttarakhand)</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
