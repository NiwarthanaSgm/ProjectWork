import React from 'react';
import {Link} from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import {Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Box} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./userbox.css";


function getFiveStars() {
  return 100;
}
function getFourStars() {
    return 80;
}
function getThreeStars() {
    return 35;
}
function getTwoStars() {
    return 20;
}
function getOneStars() {
    return 10;
}

export default function UserBox() {
  const name= "ABCD";
  return ( 
    <><div className='bar'><div className='prof'>
        <Link to="/profile"><Avatar alt={name} src="https://images.app.goo.gl/W3A7SgmNs2M3m2oy9" sx={{ width: 70, height: 70}}/></Link>
        <Typography style={{variant: 'primary', paddingLeft: '20px', paddingTop: '20px', color: 'black'}}>{name}</Typography>
      </div>
      <div className='menu'>
        <List sx={{ width: '100%', maxWidth: 360, color:'primary', cursor:'pointer'}}>
          <ListItem className='menuItem'>
            Schedules
          </ListItem>
          <ListItem className='menuItem'>
            Reschedules
          </ListItem>
          <ListItem className='menuItem'>
            Completed
          </ListItem>
          <ListItem className='menuItem'>
            Cancelled
          </ListItem>
          <ListItem className='menuItem'>
            Stared
          </ListItem>
        </List> 
        </div>
        <div className='rates'>
         <Box
            sx={{
              width: 'auto',
              height: 'auto',
              backgroundColor: 'smokewhite',
            }}
         >
           <Typography variant='subtitle1' marginTop={5}>Ratings:</Typography>
           <Typography sx={{display:'inline-flex'}}>
             5 <Box width={getFiveStars()} sx={{height: 20, backgroundColor: 'yellow', border:'2px', marginLeft:2, marginRight:2 }}/>
           </Typography><Typography sx={{display:'inline-flex', justifyContent:'space-between', alignItems:'right'}}>(1)</Typography><br/>
           <Typography sx={{display:'inline-flex'}}>
             4 <Box width={getFourStars()} sx={{height: 20, backgroundColor: 'blue', border:'2px',marginLeft:2, marginRight:2 }}/>
           </Typography><Typography sx={{display:'inline-flex', justifyContent:'space-between', alignItems:'right'}}>(1)</Typography><br/>
           <Typography sx={{display:'inline-flex'}}>
             3 <Box width={getThreeStars()} sx={{height: 20, backgroundColor: 'green', border:'2px',marginLeft:2, marginRight:2 }}/>
           </Typography><Typography sx={{display:'inline-flex', justifyContent:'space-between', alignItems:'right'}}>(1)</Typography><br/>
           <Typography sx={{display:'inline-flex'}}>
             2 <Box width={getTwoStars()} sx={{height: 20, backgroundColor: 'violet', border:'2px',marginLeft:2, marginRight:2 }}/>
           </Typography><Typography sx={{display:'inline-flex', justifyContent:'space-between', alignItems:'right'}}>(1)</Typography><br/>
           <Typography sx={{display:'inline-flex'}}>
             1 <Box width={getOneStars()} sx={{height: 20, backgroundColor: 'red', border:'2px',marginLeft:2, marginRight:2 }}/>
           </Typography><Typography sx={{display:'inline-flex', justifyContent:'space-between', alignItems:'right'}}>(1)</Typography>
         </Box>
         <Link to="/create Gig"><Button><AddCircleIcon/>Add Gig</Button></Link>
        </div>
    </div></>
  )
}
