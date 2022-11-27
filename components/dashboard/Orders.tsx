import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: string
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "Joseline_Molozzi",
    "dry",
    "dez",
    "21",
    "sume"
  ),
  createData(
    1,
    "Joseline_Molozzi",
    "dry",
    "dez",
    "21",
    "sume"
  ),
  createData(
    2,
    "Joseline_Molozzi",
    "dry",
    "dez",
    "21",
    "sume"
  ),
  createData(
    3,
    "Joseline_Molozzi",
    "dry",
    "dez",
    "21",
    "sume"
  ),
  createData(
    4,
    "Joseline_Molozzi",
    "dry",
    "dez",
    "21",
    "sume"
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Matriz de peixes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Coordinator</TableCell>
            <TableCell>seasonality</TableCell>
            <TableCell>year</TableCell>
            <TableCell>place</TableCell>
            <TableCell align="right">system</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver mais
      </Link>
    </React.Fragment>
  );
}
