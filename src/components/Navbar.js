import React from "react";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import ProfileIcon from './ProfileIcon';
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
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
          <ProfileIcon/>
        </div>
      </div>
    </div>
  );
}