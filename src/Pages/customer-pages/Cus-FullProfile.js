import React from 'react';
import Navbar from '../../components/customer-dash-component/Navbar';
import ProfileDetails from '../../components/customer-dash-component/ProfileDetails';
import EditProfile from '../../services/customer-services/EditProfile-customer';

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
