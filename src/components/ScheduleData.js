import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Date', headerName: 'Date', width: 150 },
  { field: 'Time', headerName: 'Time', width: 150 },
  { field: 'Client', headerName: 'Client Name', width: 200 },
  { field: 'Duration', headerName:'Duration', width: 180 }
];
const rows = [
  { id: 1, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
  { id: 2, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
  { id: 3, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
  { id: 4, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
  { id: 5, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
  { id: 6, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
  { id: 7, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
  { id: 8, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
  { id: 9, Date:'01-01-2022', Time:'11.00AM GMT', Client:'Mogana Crews' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: 'auto', alignItems:'center'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
