import React, { useState } from 'react';
// import { motion } from "framer-motion";
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';

function Play() {
  const elements = [
    { name: 'folder', icon: 'folder.ico', link: "/about"},
    { name: 'notepad', icon: 'notepad.ico', link: null },
    { name: 'Schedules', icon: 'globe.ico', link: "/schedules" },
  ];

  const [showWindow, setShowWindow] = useState(false);
  const [position, setPosition] = useState({x: 40, y: 40});

  const navigate = useNavigate();
  
  const onStop = (data, element) => {
    if ( Math.abs(data.x - position.x) <= 2  && Math.abs(data.y - position.y) <= 2) {
      if( element.name === "notepad"){
        setShowWindow(true);
      }else{
        navigate(element.link);
        console.log("pushed");
      }
    } else {
      setPosition({ x: data.x, y: data.y });
    }
  };

  return (
    <div className=''>
      {elements.map((element, index) => {
        return(
        <Draggable
          defaultPosition={{x: 40, y: 40}}
          onStop={(_, data) => onStop(data, element)}
          key={index}
          grid={[2, 2]}
        >
          <div 
            style={{ width: "100px", height: "100px" }} 
            className="handle flex item-center justify-center border border-dashed border-black cursor-pointer"
          >
            <div className="box text-center text- font-w95 p-2">
              <a href={element.link}>
              <div style={{ 
                  backgroundImage: `url(${process.env.PUBLIC_URL}/${element.icon})`,
                  backgroundSize: 'cover',
                  height: '50px',
                  width: '50px'
              }}></div>
              </a>
              <p>{element.name}</p>
            </div>
          </div>
        </Draggable>
        )
      })}

        {showWindow && 
        <div>
          <Draggable handle="strong" 
          defaultPosition={{x: 10, y: 20}}
         
          >
            <div className="bg-element custom-border" style={{ width: "400px", height: "300px" }} >
              <div className="box p-0.5">
                <strong className="cursor flex justify-between bg-[#000082]  px-0.5">
                  <div className=' text-white cursor-pointer '>About</div>
                  <div 
                  className='bg-element px-1 my-1  custom-border cursor-pointer'
                  onClick={() => setShowWindow(false)}
                  >
                    <div
                    className='-my-1 pb-0.5'
                    >X</div>
                  </div>
                </strong>
                <div>Text should be here...</div>
              </div>
            </div>
          </Draggable>
        </div>
        }
    </div>
  );
}

export default Play;
