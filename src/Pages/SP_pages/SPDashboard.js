import React from 'react';
import UserBox from '../../components/SP_DashboardComponent/UserBox';
import Tabs from '../../components/SP_DashboardComponent/Tabs';
import Earnings from '../../components/SP_DashboardComponent/Earnings';
import '../../styles/dashboard.css';
import Navbar from '../../components/SP_DashboardComponent/Navbar';


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
