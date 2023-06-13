import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const overlayRef = React.useRef(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const hideOverlay = () => {
    overlayRef.current.style.display = "none";
  };

  const showOverlay = () => {
    overlayRef.current.style.display = "block";
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop
        muted
        controls={false}
      />
      <div className="app__video-overlay flex__center" ref={overlayRef}></div>
      <div
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
      >
        {playVideo ? (
          <BsPauseFill color="#fff" fontSize={30} onClick={showOverlay} />
        ) : (
          <BsFillPlayFill color="#fff" fontSize={30} onClick={hideOverlay} />
        )}
      </div>
    </div>
  );
};

export default Intro;
