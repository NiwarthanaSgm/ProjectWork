import { Divider, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import UserBox from '../../components/SP_DashboardComponent/UserBox';
import '../../styles/dashboard.css';
import Navbar from '../../components/SP_DashboardComponent/Navbar';

export default function createGig() {

    const handleSubmit = (e) => {
        e.defaultPrevent();
    }
  return (
    <>
    <div><Navbar/></div>
      <div className='home'>
        <div className='col1'>
          <UserBox/>
          <div>
        <h1 style={{color:'green', padding:'10px'}}>Create Your new gigs....</h1>
        <Box sx={{
         "& .MuiTextField-root": { margin: 2, width: "40ch" },
          margin: "5%",
          border: "ActiveBorder",
          borderColor: "lightgreen",
          borderRadius: "10px",
          width:'80%',
          GridAlign:'center'}}
          >
            
        <form onSubmit={handleSubmit}>

            <TextField
            id="standard-required"
            label="Gig Title"
            placeholder="title..."
            variant="standard"
            />

            <textArea 
            name="skill"
            label="Add skill"
            placeholder="Add gig description...."
            style={{ width: "80%", height:'100px', padding:'5px' }}
            />

            <TextField
            id="standard-required"
            label="Hourly Rate"
            placeholder="hourly rate.."
            variant="standard"
            />

            <Divider />
            <p>Upload your gig as an image
            <label>
                <span style={{color:'lightblue'}}> In Here</span> 
              <input type="file" id="image" style={{ display: "none" }} />
             </label> </p>
        </form>
        </Box>
    </div>
        </div>
      </div>
    </>
  )
}
