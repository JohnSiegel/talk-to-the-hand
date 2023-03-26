import React, { forwardRef, useState } from "react";

const SCROLL_THRESHOLD = 0.5;

const Overlay = forwardRef(
  ({ caption, scroll, pyodide, textToAslScript }, ref) => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const loaded = pyodide != null && textToAslScript != null;
    return (
      <div
        ref={ref}
        onScroll={(e) => {
          scroll.current =
            e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
          if (loaded) {
            caption.current.innerText =
              scroll.current < 0.05 ? "Scroll down" : "";
            if (scroll.current > SCROLL_THRESHOLD) {
              setBackgroundColor("black");
            }
          }
        }}
        className="scroll"
      >
        {" "}
        <>
          {loaded ? (
            <>
              <div class="gradient">
         <div>
             <img class="logo" src="icon_with_name.png" alt="" ></img>
             <h1>TALK TO THE HAND</h1>
         </div>
              </div>
              <div><h1>Features</h1></div>
              <div class="container">
         <div class="item" id="box1">
             <div class="icon_images">
             <img class="box_images" src="T2ASL_Placeholder.png" alt=""></img>
             </div>
             <div class="box_title">Text2Sign</div>
             <div class="discription1" id="subtitle1">Text2Sign</div>
             <div class="discription1">Experience barrier-free communication with our user-friendly website that transforms your text into dynamic ASL videos, making your content accessible and engaging for the Deaf and Hard-of-Hearing community.</div>
             <div class ="discription1" id="tio_button1">Try It Out!</div>
         </div>
         <div class="item" id="box2">
             <div class="icon_images">
             <img class="box_images" src="Speech2ASL_Placehoder.png" alt=""></img>
             </div>
             <div class="box_title">Voice2Sign</div>
             <div class="discription2" id="subtitle2">Voice2Sign</div>
             <div class="discription2">Bring your audio files to life by converting them into captivating ASL videos through our innovative platform, ensuring that your content reaches and resonates with a diverse audience.</div>
             <div class ="discription2" id="tio_button2">Try It Out!</div>
         </div>
         <div class="item" id="box3">
             <div class="icon_images">
             <img class="box_images" alt="" src="LiveSTT_Placehoder.jpg"></img>
             </div>
             <div class="box_title">SignExpress</div>
             <div class="discription3" id="subtitle3">SignExpress</div>
             <div class="discription3">Bridge the communication gap with our groundbreaking website that translates your speech into real-time ASL, empowering you to interact with the Deaf and Hard-of-Hearing community effortlessly and inclusively.</div>
             <div class ="discription3" id="tio_button3">Try It Out!</div>
         </div>
     </div>
     <span className="caption" ref={caption}>
       Scroll down
     </span>
            </>
          ) : (
            <div
              style={{
                top: "35%",
                width: "100%",
                position: "absolute",
                textAlign: "center",
              }}
            >
              <h1 className="blob">Loading...</h1>
            </div>
          )}
        </>
      </div>
    );
  }
);
 export default Overlay;
