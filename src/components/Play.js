import React from 'react';
// import { motion } from "framer-motion";
import Draggable from 'react-draggable';

function Play() {
  // const constraintsRef = React.useRef(null);

  

  // const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
  return (
    <div className=''>
      {/* <h1>Play</h1> */}

      {/* <motion.div 
        style={{backgroundColor:"red", width: "30px", height: "30px"}}
        animate={{ x: 200, y:500 }}
      />

      <motion.div ref={constraintsRef}
        className='h-screen'
        dragListener={false}
    
        >
        <motion.div 
        drag 
        dragConstraints={constraintsRef} 
        dragElastic={0}
        style={{backgroundColor:"blue", width: "200px", height: "200px", borderRadius: "20%" }} 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1}}
        />
      </motion.div> */}

      <Draggable
        defaultPosition={{x: 40, y: 40}}
      >
      <div 
      style={{ width: "100px", height: "100px" }} 
      className="handle flex item-center justify-center border border-dashed border-black"
      // onClick={() => console.log('click')}
      >
        <div className="box text-center text- font-w95">
        <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/folder.ico)`,
            backgroundSize: 'cover',
            height: '60px',
            width: '60px'
        }}></div>
          <p>Folder</p>
        </div>

        </div>
      </Draggable>
      
    </div>
  );
}

export default Play;
