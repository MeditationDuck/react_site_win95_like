import React, { useState } from 'react';
// import { motion } from "framer-motion";
import Draggable from 'react-draggable';




function Play() {
  // const constraintsRef = React.useRef(null);
  // const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

  const elements = [
    { name: 'folder', icon: 'folder.ico' },
    { name: 'notepad', icon: 'notepad.ico' }
  ];

  const [showWindow, setShowWindow] = useState(false);
  const [position, setPosition] = useState({x: 40, y: 40});
  
  const onStop = (data, name) => {
    if (data.x === position.x && data.y === position.y && name === "notepad") {
      setShowWindow(true);
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
          onStop={(_, data) => onStop(data, element.name)}
          key={index}
        >
        <div 
        style={{ width: "100px", height: "100px" }} 
        className="handle flex item-center justify-center border border-dashed border-black cursor-pointer"
        >
          <div className="box text-center text- font-w95 p-2">
            <div style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/${element.icon})`,
                backgroundSize: 'cover',
                height: '50px',
                width: '50px'
            }}></div>
            <p>{element.name}</p>
          </div>

          </div>
        </Draggable>
        )
      })}

        {/* by default this window should not shown but if I double click the notepad icon.
        it should appear this window */}

        {showWindow && 
        <Draggable handle="strong" 
        defaultPosition={{x: 100, y: 40}}
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
        </Draggable> }
    </div>
  );
}

export default Play;
