import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function BasicMenu() {
  const name= 'ABCD';
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        <div style={{textAlign:'center'}}>
          <Button href="/profile"><MenuItem onClick={handleClose}>Profile</MenuItem></Button><Divider/>
          <Button href="/dashboard/serviceprovider"><MenuItem onClick={handleClose}>Dashboard</MenuItem></Button><Divider/>
          <Button href="/home"><MenuItem onClick={handleClose}>Logout</MenuItem></Button>
        </div>
      </Menu>
    </div>
  );
}
