import React from 'react';
import UserBox from '../components/UserBox';
import Tabs from '../components/Tabs';
import Earnings from '../components/Earnings';
import "./Home.css";

export default function Home() {
  return (
    <>
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
  )
}
