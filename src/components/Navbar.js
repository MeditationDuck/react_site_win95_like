// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return(
    <div className='bg-[#c3c3c3] w-full flex justify-between items-center fixed bottom-0 py-2 px-2 z-10 text-black'>
      <div class='custom-border flex item-center p-1'>
    
        <img 
        src={process.env.PUBLIC_URL + '/windows.ico'} 
        alt="window icon" 
        className="h-6 w-6 mr-1 pt-[0.1]"
        />
        <div className="text-lg font-w95">Start</div>
      </div>

      <div className='custom-border-pushed flex py-1 px-2'>
        <p>{time}</p>
      </div>


    </div>
  )
}

export default Navbar;