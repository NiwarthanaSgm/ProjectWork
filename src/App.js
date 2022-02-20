import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import UserBox from './components/UserBox';
import Home from './Pages/Home';


function App() {
  return (
    <><div><Navbar/></div>
      <div className=' app'>
        <UserBox/>
        <Home/>
      </div>
    </>
  )
}

export default App;