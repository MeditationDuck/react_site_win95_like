// import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Play, Navbar, About, LiveSchedule, Musics} from './components';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className='bg-desktop w-screen min-h-screen'>

        <Routes>
          <Route path="react_site_win95_like/" element={<> <Navbar /> <Play /> </>} />
          <Route path="react_site_win95_like/about" element={<><About /> <Navbar /> </>} />
          <Route path="react_site_win95_like/schedules" element={<><LiveSchedule /> <Navbar /></>} />
          <Route path="react_site_win95_like/musics" element={<><Musics /> <Navbar /></>} />
          
        </Routes>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
