import React from 'react';
import { Avatar, Button } from '@mui/material';
import {Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Box} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../../styles/userbox.css';


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

const styleAdded ={
  text:{
    border:'2px', marginLeft:2, marginRight:2, height: 20,
  }, count:{
    display:'inline-flex', justifyContent:'space-between', alignItems:'right',
  },
};

export default function UserBox() {
  const name= 'ABCD';
  return (
    <><div className='bar'><div className='prof'>
      <Button href="/profile"><Avatar alt={name} src="https://images.app.goo.gl/W3A7SgmNs2M3m2oy9" sx={{ width: 70, height: 70}}/></Button>
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
          backgroundColor: 'SmokeWhite',
        }}
      >
        <Typography variant='subtitle1' marginTop={5}>Ratings:</Typography>
        <Typography sx={{display:'inline-flex'}}>
             5 <Box width={getFiveStars()} sx={{ backgroundColor: 'yellow' }} style={styleAdded.text}/>
        </Typography><Typography style={styleAdded.count}>(1)</Typography><br/>
        <Typography sx={{display:'inline-flex'}}>
             4 <Box width={getFourStars()} sx={{backgroundColor: 'blue'}} style={styleAdded.text}/>
        </Typography><Typography style={styleAdded.count}>(1)</Typography><br/>
        <Typography sx={{display:'inline-flex'}}>
             3 <Box width={getThreeStars()} sx={{backgroundColor: 'green'}} style={styleAdded.text}/>
        </Typography><Typography style={styleAdded.count}>(1)</Typography><br/>
        <Typography sx={{display:'inline-flex'}}>
             2 <Box width={getTwoStars()} sx={{backgroundColor: 'violet'}} style={styleAdded.text}/>
        </Typography><Typography style={styleAdded.count}>(1)</Typography><br/>
        <Typography sx={{display:'inline-flex'}}>
             1 <Box width={getOneStars()} sx={{backgroundColor: 'red'}} style={styleAdded.text}/>
        </Typography><Typography style={styleAdded.count}>(1)</Typography>
      </Box>
      <Button href="/create Gig"><AddCircleIcon/>Add Gig</Button>
    </div>
    </div></>
  );
}
