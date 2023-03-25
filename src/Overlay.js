import React, { forwardRef } from "react";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current < 0.05 ? "Scroll down" : "";
    }}
    className="scroll"
  >
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
));

export default Overlay;
