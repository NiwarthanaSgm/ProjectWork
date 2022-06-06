import { Button } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
      <>
    <div>Home</div>
    <Button href="/dashboard/serviceprovider">As an Expert</Button>
    <Button href="/dashboard/customer">As a Client</Button>
    </>
  )
}
