import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function MarksTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            style={{
              border: "1px solid black",
              borderBottom: "2px solid black",
            }}
          >
            <TableCell style={{ border: "1px solid black", width:'50%' }}>
              Dessert (100g serving)
            </TableCell>
            <TableCell align="center" style={{padding:0, width:'15%'}}>
              <TableRow style={{ borderBottom: "1px solid black" }}>
                <TableCell style={{ borderBottom: "1px solid black", whiteSpace:'nowrap' }}>
                  Maximum Marks
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight:'1px solid black',width:'10%'}}>Ext.</TableCell>
                <TableCell style={{width:'50%'}}>Sess.</TableCell>
              </TableRow>
            </TableCell>
            <TableCell align="right" style={{ border: "1px solid black",width:'8%' }}>
              Fat&nbsp;(g)
            </TableCell>
            <TableCell align="right" style={{ padding:0, width:'15%' }}>
              <TableRow style={{ borderBottom: "1px solid black" }}>
                <TableCell style={{ borderBottom: "1px solid black", whiteSpace:'nowrap' }}>
                  Maximum Marks
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight:'1px solid black'}}>Ext.</TableCell>
                <TableCell>Sess.</TableCell>
              </TableRow>
            </TableCell>
            <TableCell align="right" style={{ border: "1px solid black",width:'8%' }}>
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ border: "1px solid black", width:'50%' }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ border: "1px solid black" }}
              >
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ border: "1px solid black" }}>
                <TableCell style={{width:'100%'}}>Mark</TableCell>
                <TableCell>Otto</TableCell>
              </TableCell>
              <TableCell align="right" style={{ border: "1px solid black" }}>
                {row.fat}
              </TableCell>
              <TableCell align="right" style={{ border: "1px solid black" }}>
                <TableCell style={{width:'100%'}}>Mark</TableCell>
                <TableCell>Otto</TableCell>
              </TableCell>
              <TableCell align="right" style={{ border: "1px solid black" }}>
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MarksTable;
