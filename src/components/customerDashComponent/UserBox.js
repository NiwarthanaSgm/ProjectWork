import React, { useState, useEffect } from 'react';
import { Avatar, Button } from '@mui/material';
import {Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import '../../styles/userbox.css';
import apiService from '../../api/apiService';

export default function UserBox() {

  const [details , setDetails] = useState([]);
    async function getCustomerData(){
        const res = await apiService.CustomerDetails.fetchCustomerDetails();
        
        if (res.status === 200){
          setDetails(res.data);
        }
    } console.log(details)
    useEffect(()=> {
      getCustomerData() 
    }, [] )

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
    </div>
    </>
  );
}
