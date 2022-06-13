import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationsNone, Language, Settings, Home } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import IconMenu from './IconMenu'; 
import '../../styles/navbar.css';

export default function Navbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Doodus</span>
        </div>
        <div className="topRight">
          <span className='type'>As a Client</span>
          <div className="topbarIconContainer">
            <Link to={"/home"}><Tooltip title='Home'><Home/></Tooltip></Link>
          </div>
          <div className="topbarIconContainer">
            <Tooltip title='Notifications'><NotificationsNone /></Tooltip>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Tooltip title='Language'><Language color="primary"/></Tooltip>
          </div>
          <div className="topbarIconContainer">
            <Tooltip title='Settings'><Settings /></Tooltip>
          </div>
          <IconMenu/>
        </div>
      </div>
    </div>
  );
}
