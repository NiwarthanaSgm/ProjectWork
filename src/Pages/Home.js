import React from 'react';
import { Button } from '@mui/material';


export default function Home() {
  return (
      <>
    <h1>Join</h1>
    <Button href="/dashboard/serviceprovider">As an Expert</Button>
    <Button href="/dashboard/customer">As a Client</Button>
    </>
  )
}
