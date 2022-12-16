import React from "react";
import { useRef } from "react";
import "./useref.css";

export default function ColorChange() {
  const color = useRef();
  const mybtn = useRef();
  return (
    <div>
      <div ref={color} className=""></div>
      <button class="switch-btn " ref={mybtn} onClick={myhandler}>
        <span>play</span>
        <span>pause</span>
        <span class="switch"></span>
      </button>
    </div>
  );
}
