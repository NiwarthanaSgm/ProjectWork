import React from 'react';
import UserBox from '../../components/SP-dashboard-component/UserBox';
import Tabs from '../../components/SP-dashboard-component/Tabs';
import Earnings from '../../components/SP-dashboard-component/Earnings';
import '../../styles/dashboard.css';
import Navbar from '../../components/SP-dashboard-component/Navbar';

export default function Home() {
  return (
    <>
    <div><Navbar/></div>
      <div className='home'>
        <div className='col1'>
          <UserBox/>
          <div className='col2'>
            <Tabs/>
            <Earnings/>
          </div>
        </div>
      </div>
    </>
  );
}
