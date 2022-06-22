// import React from 'react';
// import { ClientRows } from '../../store/Data';

// export default function schedulesTable() {

  // const columns = [
  //   { field: 'Date', headerName: 'Date', width: 150 },
  //   { field: 'Time', headerName: 'Time', width: 150 },
  //   { field: 'Client', headerName: 'Expert Name', width: 200 },
  //   { field: 'Duration', headerName:'Duration', width: 150 },
  //   { field: 'Action', headerName: 'Action', width: 80 },
  // ];

  
//   return (
//     <div style={{ height: 375, width: 'auto', alignItems:'center'}}>
//       <DataGrid
//         rows={ClientRows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react'
// import apiService from '../../api/apiService';
// import { DataGrid } from '@mui/x-data-grid';

// export default function ScheduleData() {

  // const [ScheduleData , setScheduleData] = useState([])
  //   async function getScheduleData(){
  //       const res = await apiService.ScheduleData.fetchCustomerSchedulesDetails();
        
  //       if (res.status === 200){
  //         setScheduleData(res.data);
  //       }
  //   } console.log(ScheduleData)
  //   useEffect(()=> {
  //     getScheduleData() 
  //   }, [] )

//   const columns = [
//     { field: 'Date', headerName: 'Date', width: 150 },
//     { field: 'Time', headerName: 'Time', width: 150 },
//     { field: 'Client', headerName: 'Expert Name', width: 200 },
//     { field: 'Duration', headerName:'Duration', width: 150 },
//     { field: 'Action', headerName: 'Action', width: 80 },
//   ];

//   return (
//       <div style={{ height: 375, width: 'auto', alignItems:'center'}}>
//         <DataGrid
//           rows={
//             ScheduleData.map((val) => {
//               return(
//                 <p>{val.getScheduleData}</p>
//               )
//             })
//           }
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//         />
//       </div>
//     );
//   }

//----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import apiService from '../../api/apiService';
import { Button } from '@mui/material';

// function createData(Date, Time, ServiceProvider, Duration) {
//   return { Date, Time, ServiceProvider, Duration };
// }

// const rows = [
//   createData(
    
//   ),
// ];

export default function ScheduleTable() {

  const [ScheduleData , setScheduleData] = useState([]);
    async function getScheduleData(){
        const res = await apiService.ScheduleData.fetchCustomerSchedulesDetails();
        
        if (res.status === 200){
          setScheduleData(res.data);
        }
    } console.log(ScheduleData)
    useEffect(()=> {
      getScheduleData() 
    }, [] )

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">Service Provider</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ScheduleData.map((val) => (
            <TableRow
              key={val.Schedule_ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {val.Schedule_ID}
              </TableCell>
              <TableCell align="right">{val.Schedule_Date}</TableCell>
              <TableCell align="right">{val.StartTime}</TableCell>
              <TableCell align="right">{val.FirstName}+{val.LastName}</TableCell>
              <TableCell align="right">{val.Duration}</TableCell>
              <TableCell align="right"><Button>Reschedule</Button></TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

