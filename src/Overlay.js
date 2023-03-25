import React, { forwardRef, useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import text_to_asl from "!!raw-loader!./python/text_to_asl.py";

const SCROLL_THRESHOLD = 0.5;

const Overlay = forwardRef(({ caption, scroll, pyodide }, ref) => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current =
          e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        caption.current.innerText = scroll.current < 0.05 ? "Scroll down" : "";
        if (scroll.current > SCROLL_THRESHOLD) {
          setBackgroundColor("black");
        }
      }}
      className="scroll"
    >
      <button
        onClick={async (event) => {
          if (pyodide != null) {
            console.log(text_to_asl);
            console.log(pyodide.runPython(text_to_asl));
          } else {
            console.log("Pyodide not loaded yet");
          }
        }}
      >
        Hello
      </button>
      <div class="logo">
        <img src="placeholder_logo.png" alt="" height="300" width="300" />
      </div>
      <div class="container">
        <div class="item">
          <div class="icon_images">
            <img id="t2asl_image" alt="" src="T2ASL_Placeholder.png" />
          </div>
          <div class="box_title">Text to ASL</div>
        </div>
        <div class="item">
          <div class="icon_images">
            <img id="s2t_image" alt="" src="Speech2ASL_Placehoder.png" />
          </div>
          <div class="box_title">Text to ASL</div>
        </div>
        <div class="item">
          <div class="icon_images">
            <img id="live_image" alt="" src="LiveSTT_Placehoder.jpg" />
          </div>
          <div class="box_title">Text to ASL</div>
        </div>
      </div>
      <span className="caption" ref={caption}>
        Scroll down
      </span>
    </div>
  );
});

export default Overlay;
