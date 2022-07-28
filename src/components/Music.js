import { useState } from "react";
import music from "../sound/music.mp3";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";

var audio = new Audio(music);

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

  return (
    <div className="music">
      {playValue ? (
        <GiSoundOn
          value={playValue}
          onClick={() => handlePlay()}
          className="play-btn"
        ></GiSoundOn>
      ) : (
        <GiSoundOff
          value={playValue}
          onClick={() => handlePlay()}
          className="pause-btn"
        ></GiSoundOff>
      )}
    </div>
  );
};

export default Music;
