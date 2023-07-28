// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [buttonStatus, setButtonStatus] = useState({ start: false, search1: false, search2: false });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const handleClick = (button) => {
  //   setButtonStatus(prev => ({...prev, [button]: !prev[button]}));
  // }
  const bar_contents = [
    {name: 'Start', icon: 'windows.ico'},
    {name: 'Search', icon: null},
    {name: 'Instagram', icon: 'instagram.ico'},
  ];
  
  return(
    <div className='bg-element w-full flex flex-row justify-between items-center fixed bottom-0 py-2 px-2 z-10 text-black'>
      {bar_contents.map((content, index) => {
        console.log(process.env.PUBLIC_URL + content.icon)
        return(
        <div 
        class={`flex p-1 cursor-pointer flex-shrink-0 m-1 ${buttonStatus.start ? 'custom-border-pushed' : 'custom-border'}`}
        onMouseDown={() => setButtonStatus(prev => ({...prev, start: true}))}
        onMouseUp={() => setButtonStatus(prev => ({...prev, start: false}))}
        >
        { content.icon &&
          <img 
          src={process.env.PUBLIC_URL + '/'+ content.icon}
          alt="window icon" 
          className="h-6 w-6 mr-1 pt-[0.1]"
          />
        }
          <div className="text-lg font-w95 ">{content.name}</div>
        </div>
      )
      })}
      
    
      <div className="w-full">
      </div>


      <div className='custom-border-pushed flex py-1 px-2'>
        <p>{time}</p>
      </div>


    </div>
  )
}

export default Navbar;
