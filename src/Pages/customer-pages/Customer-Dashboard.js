import React from 'react';
import Tabs from '../../components/customer-dash-component/Tabs';
import '../../styles/dashboard.css';
import Navbar from '../../components/customer-dash-component/Navbar';
import PaymentDetails from '../../components/customer-dash-component/Payments';
import UserBox from '../../components/customer-dash-component/UserBox';

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
