import { useEffect, useState } from "react";
import music from "../sound/music.mp3";

import { GiSoundOn, GiSoundOff } from "react-icons/gi";

let audio = new Audio(music);
const Music = () => {
  const [playValue, setPlayValue] = useState(true);

  const handlePlay = () => {
    if (playValue) {
      audio.play();
      setPlayValue(false);
    } else {
      audio.pause();
      setPlayValue(true);
    }
  };

  useEffect(() => {
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      audio.play();
    });
  }, [audio]);

  return (
    <div className="music">
      {playValue ? (
        <div
          className="play-container"
          value={playValue}
          onClick={() => handlePlay()}
        >
          <GiSoundOn className="play-btn"></GiSoundOn>
          <span>Sound On</span>
        </div>
      ) : (
        <div
          className="pause-container"
          value={playValue}
          onClick={() => handlePlay()}
        >
          <GiSoundOff className="pause-btn"></GiSoundOff>
          <span>Sound Off</span>
        </div>
      )}
    </div>
  );
};

export default Music;
