import React from 'react'
import { Button } from '@mui/material'


export default function Home() {
  return (
      <>
    <div>Home</div>
    <Button href="/dashboard/serviceprovider">As an Expert</Button>
    <Button href="/dashboard/customer">As a Client</Button>
    </>
  )
}
