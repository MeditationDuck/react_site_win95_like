import React, { forwardRef, useImperativeHandle } from 'react';
import useSound from 'use-sound';

const Sound = `${process.env.PUBLIC_URL}/musics/uk_drill_for_dev.mp3`;

const Player = forwardRef((props, ref) => {
  const [play, { stop, pause }] = useSound(Sound);

  useImperativeHandle(ref, () => ({
    stopMusic: () => stop()
  }));

  return (
    <>  
      Player
      <div className="flex flex-row">
        <div className="flex p-1 cursor-pointer flex-shrink-0 mx-1 custom-border" onClick={() => play()}>
          <div className="ml-1 text-lg font-w95 hidden sm:block">Play</div>
        </div>
        <div className="flex p-1 cursor-pointer flex-shrink-0 mx-1 custom-border" onClick={() => pause()}>
          <div className="ml-1 text-lg font-w95 hidden sm:block">Pause</div>
        </div>
        <div className="flex p-1 cursor-pointer flex-shrink-0 mx-1 custom-border" onClick={() => stop()}>
          <div className="ml-1 text-lg font-w95 hidden sm:block">Stop</div>
        </div>
      </div>
    </>
  );
});

export default Player;
