// import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Play, Navbar, About, LiveSchedule } from './components';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className='bg-desktop w-screen min-h-screen'>
        {/* navbar should here */}

        <Routes>
          <Route path="/" element={<> <Navbar /> <Play /> </>} />
          <Route path="/about" element={<><About /> <Navbar /> </>} />
          <Route path="/schedules" element={<><LiveSchedule /> <Navbar /></>} />
        </Routes>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
