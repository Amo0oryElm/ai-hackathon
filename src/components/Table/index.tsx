import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  criteria: string,
  description: string,
  weight: number,
 
) {
  return { criteria, description, weight };
}
function createDataBest(
  company: string,
  reason: string,
 
) {
  return { company, reason };
}


export default function BasicTable({data}) {
    const datareformat =[];
    const criteriaArray = Object.entries(data).map(([criteria, details]) => ({
        criteria,
        requirement: details.requirement,
        weight: details.weight,
      }));
      for(let i = 0; i < criteriaArray.length; i++){
        const tmp =  createData(
            criteriaArray[i].criteria, 
            criteriaArray[i].requirement, 
            criteriaArray[i].weight
        )
        datareformat.push(tmp) 
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
                style={{fontSize:'1rem' }}
              component="th" scope="row">
                {row.criteria}
              </TableCell>
              <TableCell 
              style={{ width: '60%', fontSize:'1rem' }}
              align="left">{row.description}</TableCell>
              <TableCell 
                style={{fontSize:'1rem' }}
              align="right">{row.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export const BestProposal = ({data}) =>{
 
      const bestProposal = [
        createDataBest(data.best_proposal,data.explanation)
      ]
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                sx={{fontSize:'1.5rem'}}
                >Company</TableCell>
                <TableCell 
                  sx={{fontSize:'1.5rem'}}
                align="left">Reason</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bestProposal.map((row) => (
                <TableRow
                  key={row.company}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell 
                    style={{fontSize:'1rem', minWidth: 200 }}
                    component="th" scope="row">
                    {row.company}
                  </TableCell>
                  <TableCell 
                    style={{ width: 1000 , textWrap:'wrap', fontSize:'1rem' }}
                    align="left">{row.reason}
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}