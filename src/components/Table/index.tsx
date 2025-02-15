import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BasicTableProps, Criteria, BestProposalProps } from "../Evaluation";

function createData(criteria: string, description: string, weight: number) {
  return { criteria, description, weight };
}
function createDataBest(vendor: string, explaination: string, score: number) {
  return { vendor, explaination, score };
}

export default function BasicTable({ data }: BasicTableProps) {
  const datareformat = [];
  const criteriaArrayFun = (
    data: Criteria
  ): { criteria: string; requirement: string; weight: number }[] => {
    return Object.entries(data).map(([criteria, details]) => ({
      criteria,
      requirement: details.requirement,
      weight: details.weight,
    }));
  };
  const criteriaArray = criteriaArrayFun(data);
  // const criteriaArray = Object.entries(data).map(([criteria, details]) => ({
  //     criteria,
  //     requirement: details.requirement,
  //     weight: details.weight,
  //   }));
  for (let i = 0; i < criteriaArray.length; i++) {
    const tmp = createData(
      criteriaArray[i].criteria,
      criteriaArray[i].requirement,
      criteriaArray[i].weight
    );
    datareformat.push(tmp);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Evaluation Criteria</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datareformat.map((row) => (
            <TableRow
              key={row.criteria}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{ fontSize: "1rem" }}
                component="th"
                scope="row"
              >
                {row.criteria}
              </TableCell>
              <TableCell
                style={{ width: "60%", fontSize: "1rem" }}
                align="left"
              >
                {row.description}
              </TableCell>
              <TableCell style={{ fontSize: "1rem" }} align="right">
                {row.weight}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export const BestProposal = ({
  vendor,
  explanation,
  score,
}: BestProposalProps) => {
  const bestProposal = [createDataBest(vendor, explanation, score)];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "1.5rem" }}>Company</TableCell>
            <TableCell sx={{ fontSize: "1.5rem" }} align="left">
              Reason
            </TableCell>
            <TableCell sx={{ fontSize: "1.25rem" }} align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bestProposal.map((row) => (
            <TableRow
              key={row.vendor}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{ fontSize: "1rem", minWidth: 200 }}
                component="th"
                scope="row"
              >
                {row.vendor}
              </TableCell>
              <TableCell
                style={{ width: 1000, textWrap: "wrap", fontSize: "1rem" }}
                align="left"
              >
                {row.explaination}
              </TableCell>
              <TableCell style={{ fontSize: "1rem" }} align="right">
                {row.score}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
