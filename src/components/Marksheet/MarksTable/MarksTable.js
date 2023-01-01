import * as React from "react";
import Table from "react-bootstrap/Table";

function MarksTable({data}) {
  return (
    <div>
      <Table bordered hover>
        <thead style={{border:'2px solid black'}}>
          <tr>
            <th style={{ width: "55%", verticalAlign:'middle' }}>Subject Code & Name</th>
            <th style={{ textAlign: "center", padding: 0, width: "17%", border:'2px solid black' }}>
              <tr style={{ display: "grid", borderBottom: "2px solid black" }}>
                <th>Maximum Ma</th>
              </tr>
              <tr style={{ display: "flex" }}>
                <th style={{ width: "50%", borderRight: "2px solid black" }}>
                  Ext.
                </th>
                <th style={{ width: "50%" }}>Sess.</th>
              </tr>
            </th>
            <th style={{ width: "8%", textAlign: "center",border:'2px solid black',verticalAlign:'middle' }}>Total</th>
            <th style={{ textAlign: "center", padding: 0, width: "17%",border:'2px solid black' }}>
              <tr style={{ display: "grid", borderBottom: "2px solid black" }}>
                <th>Marks Obtained</th>
              </tr>
              <tr style={{ display: "flex" }}>
                <th style={{ width: "50%", borderRight: "2px solid black" }}>
                  Ext.
                </th>
                <th style={{ width: "50%" }}>Sess.</th>
              </tr>
            </th>
            <th style={{ width: "8%", textAlign: "center",border:'2px solid black',verticalAlign:'middle' }}>Total</th>
          </tr>
        </thead>
      
        <tbody style={{border:'2px solid black'}}>
          {Object.keys(data.Data[0]).map((ele)=>
            
          <tr>
            <td style={{ width: "55%",border:'2px solid black',padding:'0px 8px' }}>{ele}</td>
            <td style={{ textAlign: "center", width: "17%",border:'2px solid black',padding:0 }}>
              <tr style={{ display: "flex" }}>
                <td style={{ width: "50%", borderRight:'2px solid black' }}>{data.Data[0][ele].maxTheory}</td>
                <td style={{ width: "50%" }}>{data.Data[0][ele].maxSessional}</td>
              </tr>
            </td>
            <td style={{textAlign:'center',border:'2px solid black',padding:0, width:'8%'}}>{data.Data[0][ele].maxTotal}</td>
            <td style={{ textAlign: "center", width: "17%",border:'2px solid black',padding:0 }}>
              <tr style={{ display: "flex" }}>
                <td style={{ width: "50%", borderRight:'2px solid black' }}>{data.Data[0][ele].theory}</td>
                <td style={{ width: "50%" }}>{data.Data[0][ele].sessional}</td>
              </tr>
            </td>
            <td style={{textAlign:'center',border:'2px solid black',padding:0,width:'8%'}}>{data.Data[0][ele].theory + data.Data[0][ele].sessional}</td>
          </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default MarksTable;
