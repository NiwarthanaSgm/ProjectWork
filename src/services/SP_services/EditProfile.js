import { React, useState } from "react";
import {Box,Avatar,Button,Collapse,Divider,List,ListItem,TextField,Checkbox} from "@mui/material";
import {GitHub,Facebook,Instagram,Publish,Edit} from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';

export default function EditProfile() {

  // Edited details're sent to database
  // const [prflPic, setprflPic] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");


  const editDetails = () => {
    Axios.post('http://localhost:3002/editServiceprovider', {
      cname : firstname, 
      Adname : lastname
    }).then(() => {
      console.log("success");
    });
  };
  const style = {
    display: "inline-flex",
    justifyContent: "space-between",
    Width: "100%",
  };

  const [open, setOpen] = useState(false);
  const [show, setLink] = useState(false);

  
  // Edited details're sent to database
  // const [prflPic, setprflPic] = useState("");
  // const [firstname, setfirstname] = useState("");
  // const [lastname, setLastname] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCheck = () => {
    console.log("Helloo");
    setLink(!show);
  };
  const handleSave = () => {
    setLink(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
          <form onSubmit={handleSubmit}>
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
            <Divider />
            <div sx={style}>
              <List>
                <ListItem>
                  <h3>Linked Accounts</h3>
                  <div>
                    <Button onClick={handleClick}>
                      <AddIcon />
                      Add new
                    </Button>
                  </div>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List
                    style={{
                      display: "inline-flex",
                      width: "100%",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <ListItem>
                      <Checkbox onChange={handleCheck} color="default" />
                      <GitHub />
                    </ListItem>
                    <ListItem>
                      <Checkbox onChange={handleCheck} color="default" />
                      <Facebook />
                    </ListItem>
                    <ListItem>
                      <Checkbox onChange={handleCheck} color="default" />
                      <Instagram />
                    </ListItem>
                  </List>
                  <Collapse in={show} timeout="auto" unmountOnExit>
                    <textarea name="links" />
                    <Button onClick={handleSave}>Save</Button>
                  </Collapse>
                </Collapse>
                <Divider />
                <ListItem>
                  <h3 style={{ padding: "10px 10px" }}>Skills</h3>
                  <textarea
                    name="skill"
                    label="Add skill"
                    style={{ width: "100%" }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <h3 style={{ padding: "10px 10px" }}>Education</h3>
                  <textarea
                    name="education"
                    label="Add Education"
                    style={{ width: "100%" }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <h3 style={{ padding: "10px 50px 10px 10px" }}>
                    Certificates
                  </h3>
                  <label htmlFor="file">
                    <Publish />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </ListItem>
                <Divider />
              </List>
              <Button onClick={editDetails} color='success' variant='contained'>Update</Button>
            </div>
          </form>
        </div>
      </Box>
    </>
  );
}
