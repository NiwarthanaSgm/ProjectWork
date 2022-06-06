import React from 'react'
import Navbar from '../../components/SP-dashboard-component/Navbar'
import ProfileDetails from '../../components/SP-dashboard-component/ProfileDetails'
import EditProfile from '../../services/SP-services/EditProfile'

export default function Profile() {
  return (
    <>
    <div><Navbar/></div>
    <div
    style={{ display: 'inline-flex', justifyContent: 'center', margin: '10px 10px 10px 10px' }}
  >
    <ProfileDetails />
    <EditProfile />
  </div>
  </>
  )
}
