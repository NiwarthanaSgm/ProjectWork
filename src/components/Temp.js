import React from 'react';
import Box from '@mui/material/Box';

function getFiveStars() {
  return 150;
}
function getFourStars() {
    return 100;
}
function getThreeStars() {
    return 45;
}
function getTwoStars() {
    return 20;
}
function getOneStars() {
    return 10;
}

export default function ratingDisplay() {
  return (
    <><Box width={getFiveStars()} sx={{height: 20, backgroundColor: 'yellow', border:'2px' }}/><br/>
    <Box width={getFourStars()} sx={{height: 20, backgroundColor: 'blue', border:'2px' }}/><br/>
    <Box width={getThreeStars()} sx={{height: 20, backgroundColor: 'violet', border:'2px' }}/><br/>
    <Box width={getTwoStars()} sx={{height: 20, backgroundColor: 'green', border:'2px' }}/><br/>
    <Box width={getOneStars()} sx={{ height: 20, backgroundColor: 'red', border:'2px'}}/>
    </>
  );
}