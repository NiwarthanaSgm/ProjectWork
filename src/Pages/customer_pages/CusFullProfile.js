import React from 'react';
import Navbar from '../../components/customerDashComponent/Navbar';
import ProfileDetails from '../../components/customerDashComponent/ProfileDetails';
import EditProfile from '../../services/customer_services/EditProfileCustomer';


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
