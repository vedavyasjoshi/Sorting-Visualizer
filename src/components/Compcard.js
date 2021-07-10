import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: 300,
    height:300,
    background:'#9B9B9B'
  },
});
function createData(name, BestCase, AverageCase, WorstCase) {
  return {name, BestCase, AverageCase, WorstCase };
}

const rows = [
  createData('Bubble Sort','Ω(n)','θ(n^2)','O(n^2)'),
  createData('Merge Sort','Ω(nlog(n))','θ(nlog(n))','O(nlog(n))'),
  createData('Quick Sort','Ω(nlog(n))','θ(nlog(n))','O(n^2))'),
  createData('Insertion Sort', 'Ω(n)','θ(n^2)','O(n^2)'),
  createData('Selection Sort',' Ω(n^2)','θ(n^2)','O(n^2)'),
];

export default function BasicTable() {
  const classes = useStyles();
  
  return (
      <>
      {/* <h1 style={{color: "red"}}>Time Complexities</h1> */}
    <TableContainer  className={classes.table} component={Paper} style={{height:'346px',width:'302px',marginLeft:'30px'}}>
          
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{height:'20px'}}>
          <TableRow >
            <TableCell style={{fontSize:'20px',color: "cyan",height:'20px'}}align="center">Best Case</TableCell>
            <TableCell style={{fontSize:'20px',color: "cyan",height:'20px'}}align="center">Average Case</TableCell>
            <TableCell style={{fontSize:'20px',color: "cyan",height:'20px'}}align="center">Worst Case</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.BestCase}</TableCell>
              <TableCell align="center">{row.AverageCase}</TableCell>
              <TableCell align="center">{row.WorstCase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
