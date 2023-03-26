import React, { forwardRef, useEffect, useState } from "react";

const SCROLL_THRESHOLD = 0.5;

const hoveringDescriptionStyle = {
  "display":"block",
    "padding-left":"20px",
    "padding-right":"20px",
    "color":"black",
};

const notHoveringDescStyle = {
  "display":"none",
  "list-style-type": "none",
  "margin":["10px", "10px", "10px", "10px"],
  "overflow": "hidden",
};

const description1 = "Experience barrier-free communication with our user-friendly website that transforms your text into dynamic ASL videos, making your content accessible and engaging for the Deaf and Hard-of-Hearing community.";
const description2 = "Bring your audio files to life by converting them into captivating ASL videos through our innovative platform, ensuring that your content reaches and resonates with a diverse audience.";
const description3 = "Bridge the communication gap with our groundbreaking website that translates your speech into real-time ASL, empowering you to interact with the Deaf and Hard-of-Hearing community effortlessly and inclusively.";

const MAX_FONT_SIZE = 22;

const ANIMATION_RATE = 0.3;

const MAX_DESCRIPTION_WIDTH = 450;
const MIN_DESCRIPTION_WIDTH = 350;

const MAX_DESCRIPTION_HEIGHT = 600;
const MIN_DESCRIPTION_HEIGHT = 400;

const Overlay = forwardRef(
  ({ caption, scroll, pyodide, textToAslScript }, ref) => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const loaded = pyodide != null && textToAslScript != null;
    const [animateHover1, setAnimateHover1] = useState(0);
    const [animateHover2, setAnimateHover2] = useState(0);
    const [animateHover3, setAnimateHover3] = useState(0);
    const [animateTextHover1, setAnimateTextHover1] = useState(0);
    const [animateTextHover2, setAnimateTextHover2] = useState(0);
    const [animateTextHover3, setAnimateTextHover3] = useState(0);
    const [animateBoxHover1, setAnimateBoxHover1] = useState(0);
    const [animateBoxHover2, setAnimateBoxHover2] = useState(0);
    const [animateBoxHover3, setAnimateBoxHover3] = useState(0);
    
    const handleButtonClick = (buttonId) => {
      console.log(`${buttonId} clicked`);
    };
    
    const [hoveringButton1, setHoveringButton1] = useState(false);
    const [hoveringButton2, setHoveringButton2] = useState(false);
    const [hoveringButton3, setHoveringButton3] = useState(false);
    useEffect(() => {
      if (hoveringButton1) {
        const timeout = setTimeout(() => {
          setAnimateHover1(Math.min(1, animateHover1 + ANIMATION_RATE))
          setAnimateTextHover1(Math.min(1, animateTextHover1 + (ANIMATION_RATE / 2)));
          setAnimateBoxHover1(Math.min(1, animateBoxHover1 + (ANIMATION_RATE / 2)));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setAnimateHover1(Math.max(0, animateHover1 - ANIMATION_RATE))
          setAnimateTextHover1(Math.max(0, animateTextHover1 - (ANIMATION_RATE / 2)));          
          setAnimateBoxHover1(Math.max(0, animateBoxHover1 - (ANIMATION_RATE / 2)));
        }, 50);
        return () => clearTimeout(timeout);
      }}, [hoveringButton1, setAnimateHover1, animateHover1, setAnimateTextHover1, animateTextHover1, setAnimateBoxHover1, animateBoxHover1]);
      useEffect(() => {

      if (hoveringButton2) {
        const timeout = setTimeout(() => {
          setAnimateHover2(Math.min(1, animateHover2 + ANIMATION_RATE))
          setAnimateTextHover2(Math.min(1, animateTextHover2 + (ANIMATION_RATE / 2)));
          setAnimateBoxHover2(Math.min(1, animateBoxHover2 + (ANIMATION_RATE / 2)));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setAnimateHover2(Math.max(0, animateHover2 - ANIMATION_RATE))
          setAnimateTextHover2(Math.max(0, animateTextHover2 - (ANIMATION_RATE / 2)));
          setAnimateBoxHover2(Math.max(0, animateBoxHover2 - (ANIMATION_RATE / 2)));
        }, 50);
        return () => clearTimeout(timeout);
      }      }, [animateHover2, hoveringButton2, setAnimateHover2, setAnimateTextHover2, animateTextHover2, setAnimateBoxHover2, animateBoxHover2]);

      useEffect(() => {
      if (hoveringButton3) {
        const timeout = setTimeout(() => {
          setAnimateHover3(Math.min(1, animateHover3 + ANIMATION_RATE))
          setAnimateTextHover3(Math.min(1, animateTextHover3 + (ANIMATION_RATE / 2)));
          setAnimateBoxHover3(Math.min(1, animateBoxHover3 + (ANIMATION_RATE / 2)));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setAnimateHover3(Math.max(0, animateHover3 - ANIMATION_RATE))
          setAnimateTextHover3(Math.max(0, animateTextHover3 - (ANIMATION_RATE / 2)));
          setAnimateBoxHover3(Math.max(0, animateBoxHover3 - (ANIMATION_RATE / 2)));
        }, 50);
        return () => clearTimeout(timeout);
      }
    }, [hoveringButton3, animateHover3, setAnimateHover3, setAnimateTextHover3, animateTextHover3, setAnimateBoxHover3, animateBoxHover3]);

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
              <div className="gradient">
                <div>
                  <img className="logo" src="image.png" alt=""></img>
                </div>
              </div>
              <div>
                <h1>Features</h1>
              </div>
              <div className="container">
                <div className="item" style={{height: MIN_DESCRIPTION_HEIGHT + (MAX_DESCRIPTION_HEIGHT - MIN_DESCRIPTION_HEIGHT) * animateBoxHover1, width: MIN_DESCRIPTION_WIDTH + (MAX_DESCRIPTION_WIDTH - MIN_DESCRIPTION_WIDTH) * animateBoxHover1}} onMouseEnter={(event) => {
                      setHoveringButton1(true);
                    }}
                    onMouseLeave={(event) => {
                      setHoveringButton1(false);
                    }}>
                  <div className="icon_images">
                    <img
                      className="box_images"
                      src="T2ASL_Placeholder.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="box_title">Text2Sign</div>
                  <div className="discription1" id="subtitle1">
                    Text2Sign
                  </div>
                  <div style={{...(hoveringButton1 ?hoveringDescriptionStyle : notHoveringDescStyle)}}>
                    {description1.substring(0, Math.round(description1.length * animateTextHover1))}
                  </div>
                  <button
                    style={{...(hoveringButton1 ?hoveringDescriptionStyle : notHoveringDescStyle), fontSize: MAX_FONT_SIZE * animateHover1, opacity: animateBoxHover1}}
                    id="tio_button1"
                    onClick={() => handleButtonClick("tio_button1")}
                  >
                    Try It Out!
                  </button>
                </div>
                <div className="item" style={{height: MIN_DESCRIPTION_HEIGHT + (MAX_DESCRIPTION_HEIGHT - MIN_DESCRIPTION_HEIGHT) * animateBoxHover2, width: MIN_DESCRIPTION_WIDTH + (MAX_DESCRIPTION_WIDTH - MIN_DESCRIPTION_WIDTH) * animateBoxHover2}} onMouseEnter={(event) => {
                      setHoveringButton2(true);
                    }}
                    onMouseLeave={(event) => {
                      setHoveringButton2(false);
                    }}>
                  <div className="icon_images">
                    <img
                      className="box_images"
                      src="Speech2ASL_Placehoder.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="box_title">Voice2Sign</div>
                  <div className="discription2" id="subtitle2">
                    Voice2Sign
                  </div>
                  <div style={{...(hoveringButton2 ?hoveringDescriptionStyle : notHoveringDescStyle)}}>
                    {description2.substring(0, Math.round(description2.length * animateTextHover2))}
                  </div>
                  <button
                    style={{...(hoveringButton2 ?hoveringDescriptionStyle : notHoveringDescStyle), fontSize: MAX_FONT_SIZE * animateHover2, opacity: animateBoxHover2}}
                    id="tio_button2"
                    onClick={() => handleButtonClick("tio_button2")}
                  >
                    Try It Out!
                  </button>
                </div>
                <div className="item" style={{height: MIN_DESCRIPTION_HEIGHT + (MAX_DESCRIPTION_HEIGHT - MIN_DESCRIPTION_HEIGHT) * animateBoxHover3, width: MIN_DESCRIPTION_WIDTH + (MAX_DESCRIPTION_WIDTH - MIN_DESCRIPTION_WIDTH) * animateBoxHover3}} onMouseEnter={(event) => {
                      setHoveringButton3(true);
                    }}
                    onMouseLeave={(event) => {
                      setHoveringButton3(false);
                    }}>
                  <div className="icon_images">
                    <img
                      className="box_images"
                      alt=""
                      src="LiveSTT_Placehoder.jpg"
                    ></img>
                  </div>
                  <div className="box_title">SignExpress</div>
                  <div className="discription3" id="subtitle3">
                    SignExpress
                  </div>
                  <div style={{...(hoveringButton3 ?hoveringDescriptionStyle : notHoveringDescStyle)}}>
                    {description3.substring(0, Math.round(description3.length * animateTextHover3))}
                  </div>
                  <button
                    style={{...(hoveringButton3 ?hoveringDescriptionStyle : notHoveringDescStyle), fontSize: MAX_FONT_SIZE * animateHover3, opacity: animateBoxHover3}}
                    id="tio_button3"
                    onClick={() => handleButtonClick("tio_button3")}
                  >
                    Try It Out!
                  </button>
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