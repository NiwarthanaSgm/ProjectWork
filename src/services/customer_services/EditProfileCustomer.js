import React, {useState} from 'react';
import { Box, Avatar, Divider, TextField, Button } from "@mui/material";
import {Edit} from "@mui/icons-material";
import Axios from 'axios';

export default function EditProfile() {
  
  // Edited details're sent to database
  // const [prflPic, setprflPic] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");


  const editDetails = () => {
    Axios.post('http://localhost:3002/create', {
      cname : firstname, 
      Adname : lastname
    }).then(() => {
      console.log("success");
    });
  };

  // const showDetails = () => {
  //   Axios.get('http://localhost:3002/getData').then((response) => {
  //     console.log(response);
  //   })
  // }

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
              defaultValue="ABCD"
              variant="standard"
              onChange={(event) => {
                setfirstname(event.target.value);
              }}
            />
            <TextField
              id="standard-required"
              label="Last Name"
              defaultValue="EFGH"
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
              {/* <input
                type="submit"
                color="success"
                size="large"
                name="Save"
                label="Save"
              /> */}
              <Button onClick={editDetails}>Update</Button>
          </form>
        </div>  
      </Box>
    </>
  );
}
