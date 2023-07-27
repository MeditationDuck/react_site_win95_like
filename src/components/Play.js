import React from 'react';
// import { motion } from "framer-motion";
import Draggable from 'react-draggable';

function Play() {
  // const constraintsRef = React.useRef(null);

  

  // const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
  return (
    <div className=''>
      <h1>Play</h1>

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
        defaultPosition={{x: 100, y: 100}}
      >
      <div style={{ width: "200px", height: "200px", borderRadius: "20%" }} className="handle bg-primary">
        <div className="box text-black text-center text- font-w95">nya nta</div>

        </div>
      </Draggable>
      
    </div>
  );
}

export default Play;
