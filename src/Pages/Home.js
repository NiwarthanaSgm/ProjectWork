import React from 'react'
import Tabs from '../components/Tabs';
import Earnings from '../components/Earnings';
import "./Home.css";

export default function Home() {
  return (
    <>
    <div className='home'>
        <div>
            <Tabs/>
            <Earnings/>
        </div>
    </div>
    </>
  )
}
