import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import useSound from 'use-sound';
import { GrPlayFill, GrPauseFill,GrStopFill } from "react-icons/gr";

const Sound = `${process.env.PUBLIC_URL}/musics/uk_drill_for_dev.mp3`;

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const Player = forwardRef((props, ref) => {
  const [play, { stop, pause, duration, sound }] = useSound(Sound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying && sound) {
      // Set an interval to update the currentTime every second
      const interval = setInterval(() => {
        setCurrentTime(sound.seek());
      }, 1000);

      return () => clearInterval(interval); // Clear interval when component is unmounted or when isPlaying changes to false
    }
  }, [isPlaying, sound]);

  useImperativeHandle(ref, () => ({
    stopMusic: () => stop()
  }));

  const handlePlay = () => {
    if(!isPlaying) {
      setIsPlaying(true);
      play({
        onend: () => {
          setIsPlaying(false);
        }
      });
    }
  }
  
  const handlePause = () => {
    setIsPlaying(false);
    pause();
  }

  const handleStop = () => {
    setIsPlaying(false);
    stop();
  }

  const progressBarPercentage = duration ? (currentTime / (duration / 1000)) * 100 : 0;

  return (
    <>  
      Player

      <div className="bg-gray-300 h-2 rounded-lg mt-4">
        <div style={{ width: `${progressBarPercentage}%` }} className="bg-blue-500 h-2 rounded-lg"></div>
      </div>
      {/* Display current time and total duration */}
      <div className="mt-2">
        {formatTime(currentTime)} / {formatTime(duration / 1000)}
      </div>
      <div className="flex flex-row">
        <div className="flex p-1 pr-2 cursor-pointer flex-shrink-0 mx-1 custom-border" onClick={handlePlay}>
          <div className="ml-1 text-lg font-w95 hidden sm:block">< GrPlayFill /></div>
        </div>
        <div className="flex p-1 pr-2 cursor-pointer flex-shrink-0 mx-1 custom-border" onClick={handlePause}>
          <div className="ml-1 text-lg font-w95 hidden sm:block">< GrPauseFill/></div>
        </div>
        <div className="flex p-1 pr-2 cursor-pointer flex-shrink-0 mx-1 custom-border" onClick={handleStop}>
          <div className="ml-1 text-lg font-w95 hidden sm:block">
            <GrStopFill/></div>
        </div>
      </div>
    </>
  );
});

export default Player;
