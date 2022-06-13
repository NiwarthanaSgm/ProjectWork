import React from 'react';
import Tabs from '../../components/customerDashComponent/Tabs';
import '../../styles/dashboard.css';
import Navbar from '../../components/customerDashComponent/Navbar';
import PaymentDetails from '../../components/customerDashComponent/Payments';
import UserBox from '../../components/customerDashComponent/UserBox';


export default function Home() {
  return (
    <>
    <div><Navbar/></div>
      <div className='home'>
        <div className='col1'>
          <UserBox/>
          <div className='col2'>
            <Tabs/>
            <PaymentDetails/>
          </div>
        </div>
      </div>
    </>
  );
}
