import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router-dom';

export default function BasicMenu() {
  const name = 'ABCD';
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const history = useHistory();
  const handleMenuRoutes = (path) => {
    history.push(path);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar alt={name} src="/static/images/avatar/2.jpg" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleMenuRoutes('/customer/profile')}>Profile</MenuItem>
        <MenuItem onClick={() => handleMenuRoutes('/dashboard/customer')}>Dashboard</MenuItem>
        <MenuItem onClick={() => handleMenuRoutes('/')}>LogOut</MenuItem>
      </Menu>
    </div>
  );
}
