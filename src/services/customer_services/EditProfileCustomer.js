import React, {useState} from 'react';
import { Box, Avatar, Divider, TextField, Button } from "@mui/material";
import {Edit} from "@mui/icons-material";
import Axios from 'axios';

export default function EditProfile() {
  
  // Edited details're sent to database
  // const [prflPic, setprflPic] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  // const [list, setList] = useState([]);


  const editDetails = () => {
    Axios.put('http://localhost:3002/update/Customer', {
      firstname : firstname, 
      lastname : lastname
    }).then(() => {
      console.log("success");
    });
  };

  // const getData = () => {
  //   Axios.get("http://localhost:3002/getData").then((response) => {
  //     setList(response.data);
  //   });
  // };


  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { margin: 2, width: "40ch" },
          margin: "5%",
          border: "ActiveBorder",
          borderColor: "lightgreen",
          borderRadius: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ width: "100%", padding: "0px 10px 10px 10px" }}>
          <h2>Change Your Details</h2>
          <form>
            <label htmlFor="image" style={{ display: "inline-flex" }}>
              <Avatar
                alt="ABCD"
                src="https://images.app.goo.gl/W3A7SgmNs2M3m2oy9"
                sx={{ width: 100, height: 100, borderRadius: "10px" }}
              />
              <Edit />
            </label>
            <input type="file" id="image" style={{ display: "none" }} />
            <Divider />
            <TextField
              id="standard-required"
              label="First Name"
              placeholder="ABCD"
              variant="standard"
              onChange={(event) => {
                setfirstname(event.target.value);
              }}
            />
            <TextField
              id="standard-required"
              label="Last Name"
              placeholder="EFGH"
              variant="standard"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Email"
              defaultValue="gcbcbcbv.gg@ggf.jhf"
              variant="standard"
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Password"
              defaultValue="********"
              variant="standard"
            />
            <br />
              <Button onClick={editDetails} color='success' variant='contained'>Update</Button>
          </form>
          {/* <Button onClick={getData}>Show</Button>
          
          {list.map((val, key) => {
              return( 
              <div> 
                {val.firstname} 
              </div>

            );
      })} */}
        </div>  
      </Box>
    </>
  );
}
