import React from 'react';
import { Box, Avatar, Typography, Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import "./userbox.css";


export default function Profile() {

  /*const fname=null, lname=null;

  const getData = (data) =>{
    data.fname = "ABCD"
    data.lname = "EFGH"
  };*/

  var styleAdded ={
    top:{
      display:"inline-flex",
      Align:'center',
      width:"100%"
    },topTitle:{
      display:"block"
    },desc:{
      display:"inline-flex",
      width:"100%",
      justifyContent:'space-between',
      opacityColor: '60%'
    },headings:{
      color:"GrayText"
    }, icons:{
      fontSize:15,
      paddingRight:10,
    }, title:{
      fontSize:20
    }, details:{
      fontSize:20,
      textAlign:'right',
      paddingRight:20
    }
  }

  const name = "ABCD", position = "Lawyer", country= "Sri Lanka", city="Colombo";
  return (
    <div className='content'>
        <Box width={'100%'} height={'auto'} sx={{backgroundColor:"rgb(235, 227, 227)", padding:"2% 2% 2% 5%", minWidth:"350px",maxWidth:"500px",marginRight:2}}>
            <div style={styleAdded.top}>
            <Avatar alt={name} src="https://images.app.goo.gl/W3A7SgmNs2M3m2oy9" sx={{ width: 150, height: 150}}/>
            <div style={styleAdded.topTitle}>
            <Typography style={{fontSize:"40px", variant: 'primary', paddingLeft: '20px',paddingTop:'10px', color:'Background'}}>{name}</Typography>
            <Typography style={{fontSize:"25px", variant: 'secondary', paddingLeft: '20px', color:'ButtonText'}}>{position}</Typography>
            </div>
            </div>
            <Button style={{ margin:"10% 20% 5% 20%",textAlign:'center',minWidth:'250px'}} variant='outlined' color="success" href="/EditProfile">Edit Profile</Button>
            <div>
              <br/><hr/>
              <h3 style={styleAdded.headings}>Personal</h3>
              <div style={styleAdded.desc}>
                <Typography style={styleAdded.title}><MailIcon style={styleAdded.icons}/>Email</Typography>
                <div><Typography style={styleAdded.details}>gcbcbcbv.gg@ggf.jhf</Typography></div>
              </div>
              <div style={styleAdded.desc}>
                <Typography style={styleAdded.title}><LocationOnIcon style={styleAdded.icons}/>From</Typography>
                <div><Typography style={styleAdded.details}>{city} | {country}</Typography></div>
              </div>
              <br/><hr/>
              <h3 style={styleAdded.headings}>Linked Accounts</h3>
            </div>
        </Box>
    </div>
  )
}
