import React, { useRef } from "react";
import audio from "./audio/v1.mp3";
import "./useref.css";
export default function VideoPlayer() {
  const myaudio = useRef();
  const mybtn = useRef();

  const myhandler = () => {
    if (!mybtn.current.classList.contains("slide")) {
      mybtn.current.classList.add("slide");
      myaudio.current.play();
    } else {
      mybtn.current.classList.remove("slide");
      myaudio.current.pause();
    }
  };
  return (
    <div>
      <audio ref={myaudio}>
        <source src={audio} type="audio/mpeg" />
      </audio>

      <button class="switch-btn " ref={mybtn} onClick={myhandler}>
        <span>play</span>
        <span>pause</span>
        <span class="switch"></span>
      </button>
    </div>
  );
}
