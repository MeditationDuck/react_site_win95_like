// import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Play, Navbar } from './components';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className='bg-desktop w-screen min-h-screen'>
        {/* navbar should here */}
        <Navbar />
        {/* <div className='relative'> */}
          <Play />
        {/* </div> */}
        {/* footer here */}
      </div>
    </BrowserRouter>
  );
}

export default App;
