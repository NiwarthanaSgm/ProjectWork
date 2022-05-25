import React from 'react';
import ProfileDetails from '../components/ProfileDetails';
//import Button from '@mui/material/Button'
//import "../routes/App.css";
import EditProfile from '../services/EditProfile';

export default function Profile() {
  
  return (
      <div style={{display:"inline-flex", justifyContent:"center", margin:"10px 10px 10px 10px"}}>
          <ProfileDetails/>
          <EditProfile/>
      </div>
  )
}
