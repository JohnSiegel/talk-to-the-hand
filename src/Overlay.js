import React, { forwardRef, useEffect, useState } from "react";
import "./App";

const SCROLL_THRESHOLD_START = 0.25;
const SCROLL_THRESHOLD_MIDDLE = 0.35;
const SCROLL_THRESHOLD_MIDDLE_END = 0.7;
const SCROLL_THRESHOLD_END = 0.8;

const hoveringDescriptionStyle = {
  display: "block",
  color: "black",
};

const notHoveringDescStyle = {
  display: "none",
  listStyleType: "none",
  margin: ["10px", "10px", "10px", "10px"],
  overflow: "hidden",
};

const description1 =
  "Experience barrier-free communication with our user-friendly website that transforms your text into dynamic ASL videos, making your content accessible for the Deaf and Hard-of-Hearing community.";
const description2 =
  "Bring your audio files to life by converting them into captivating ASL videos through our innovative platform, ensuring that your content reaches and resonates with a diverse audience.";
const description3 =
  "Bridge the communication gap with our website that translates your speech into real-time ASL, empowering you to interact with the Deaf and Hard-of-Hearing community effortlessly and inclusively.";

const MAX_FONT_SIZE = 14;

const ANIMATION_RATE = 0.3;

const MAX_DESCRIPTION_WIDTH = 425;
const MIN_DESCRIPTION_WIDTH = 350;

const MAX_DESCRIPTION_HEIGHT = 600;
const MIN_DESCRIPTION_HEIGHT = 420;

const Overlay = forwardRef(
  (
    {
      caption,
      scroll,
      backgroundColor,
      setBackgroundColor,
      currentFeatureState,
    },
    ref
  ) => {
    const [userInput, setUserInput] = useState("");
    const [currentFeature, setCurrentFeature] = currentFeatureState;

    const handleInputChange = (event) => {
      const inputText = event.target.value;
      const words = inputText.split(/\s+/);
      if (words.length <= 500) {
        setUserInput(inputText);
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Call the text to ASL function with userInput
      console.log("User Input:", userInput);
    };
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
      if (buttonId === "tio_button1") {
        setCurrentFeature("tts");
      } else if (buttonId === "tio_button2") {
        setCurrentFeature("vts");
      } else if (buttonId === "tio_button3") {
        setCurrentFeature("sexp");
      }
    };

    useEffect(() => {
      switch (currentFeature) {
        case "tts":

        case "vts":
        case "sexp":
      }
    }, [currentFeature, scroll]);

    const [hoveringButton1, setHoveringButton1] = useState(false);
    const [hoveringButton2, setHoveringButton2] = useState(false);
    const [hoveringButton3, setHoveringButton3] = useState(false);
    useEffect(() => {
      if (hoveringButton1) {
        const timeout = setTimeout(() => {
          setAnimateHover1(Math.min(1, animateHover1 + ANIMATION_RATE));
          setAnimateTextHover1(
            Math.min(1, animateTextHover1 + ANIMATION_RATE / 30)
          );
          setAnimateBoxHover1(
            Math.min(1, animateBoxHover1 + ANIMATION_RATE / 2)
          );
        }, 1);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setAnimateHover1(Math.max(0, animateHover1 - ANIMATION_RATE));
          setAnimateTextHover1(0);
          setAnimateBoxHover1(
            Math.max(0, animateBoxHover1 - ANIMATION_RATE / 2)
          );
        }, 1);
        return () => clearTimeout(timeout);
      }
    }, [
      hoveringButton1,
      setAnimateHover1,
      animateHover1,
      setAnimateTextHover1,
      animateTextHover1,
      setAnimateBoxHover1,
      animateBoxHover1,
    ]);
    useEffect(() => {
      if (hoveringButton2) {
        const timeout = setTimeout(() => {
          setAnimateHover2(Math.min(1, animateHover2 + ANIMATION_RATE));
          setAnimateTextHover2(
            Math.min(1, animateTextHover2 + ANIMATION_RATE / 30)
          );
          setAnimateBoxHover2(
            Math.min(1, animateBoxHover2 + ANIMATION_RATE / 2)
          );
        }, 1);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setAnimateHover2(Math.max(0, animateHover2 - ANIMATION_RATE));
          setAnimateTextHover2(0);
          setAnimateBoxHover2(
            Math.max(0, animateBoxHover2 - ANIMATION_RATE / 2)
          );
        }, 1);
        return () => clearTimeout(timeout);
      }
    }, [
      animateHover2,
      hoveringButton2,
      setAnimateHover2,
      setAnimateTextHover2,
      animateTextHover2,
      setAnimateBoxHover2,
      animateBoxHover2,
    ]);

    useEffect(() => {
      if (hoveringButton3) {
        const timeout = setTimeout(() => {
          setAnimateHover3(Math.min(1, animateHover3 + ANIMATION_RATE));
          setAnimateTextHover3(
            Math.min(1, animateTextHover3 + ANIMATION_RATE / 30)
          );
          setAnimateBoxHover3(
            Math.min(1, animateBoxHover3 + ANIMATION_RATE / 2)
          );
        }, 1);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setAnimateHover3(Math.max(0, animateHover3 - ANIMATION_RATE));
          setAnimateTextHover3(0);
          setAnimateBoxHover3(
            Math.max(0, animateBoxHover3 - ANIMATION_RATE / 2)
          );
        }, 1);
        return () => clearTimeout(timeout);
      }
    }, [
      hoveringButton3,
      animateHover3,
      setAnimateHover3,
      setAnimateTextHover3,
      animateTextHover3,
      setAnimateBoxHover3,
      animateBoxHover3,
    ]);

    return (
      <div
        ref={ref}
        onScroll={(e) => {
          scroll.current =
            e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
          caption.current.innerText =
            scroll.current < 0.05 ? "Scroll down" : "";
          console.log(backgroundColor);
          if (scroll.current < SCROLL_THRESHOLD_START) {
            setBackgroundColor(0);
          } else if (scroll.current < SCROLL_THRESHOLD_MIDDLE) {
            setBackgroundColor(
              (scroll.current - SCROLL_THRESHOLD_START) /
                (SCROLL_THRESHOLD_MIDDLE - SCROLL_THRESHOLD_START)
            );
          } else if (scroll.current < SCROLL_THRESHOLD_MIDDLE_END) {
            setBackgroundColor(1);
          } else if (scroll.current < SCROLL_THRESHOLD_END) {
            setBackgroundColor(
              (SCROLL_THRESHOLD_END - scroll.current) /
                (SCROLL_THRESHOLD_END - SCROLL_THRESHOLD_MIDDLE_END)
            );
          } else {
            setBackgroundColor(0);
          }
        }}
        className="scroll"
      >
        <div
          style={{
            display: "flex",
            paddingBottom: "20%",
            marginBottom: "10%",
            textAlign: "center",
          }}
        >
          <div>
            <img className="logo" src="cleanlogo2.png" alt=""></img>
          </div>
        </div>
        <div>
          <h1>Features</h1>
        </div>
        <div className="container">
          <div
            className="item"
            style={{
              height:
                MIN_DESCRIPTION_HEIGHT +
                (MAX_DESCRIPTION_HEIGHT - MIN_DESCRIPTION_HEIGHT) *
                  animateBoxHover1,
              width:
                MIN_DESCRIPTION_WIDTH +
                (MAX_DESCRIPTION_WIDTH - MIN_DESCRIPTION_WIDTH) *
                  animateBoxHover1,
            }}
            onMouseEnter={(event) => {
              setHoveringButton1(true);
            }}
            onMouseLeave={(event) => {
              setHoveringButton1(false);
            }}
          >
            <div className="icon_images">
              <img className="box_images" src="image-4.png" alt=""></img>
            </div>
            <div className="box_title">Text2Sign</div>
            <div className="discription1" id="subtitle1">
              Text2Sign
            </div>
            <div
              style={{
                ...(hoveringButton1
                  ? hoveringDescriptionStyle
                  : notHoveringDescStyle),
                textAlign: "center",
                height: 90,
                color: "white",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              {description1.substring(
                0,
                Math.round(description1.length * animateTextHover1)
              )}
            </div>
            <button
              style={{
                ...(hoveringButton1
                  ? hoveringDescriptionStyle
                  : notHoveringDescStyle),
                fontSize: MAX_FONT_SIZE * animateHover1,
                opacity: animateBoxHover1,
              }}
              id="tio_button1"
              onClick={() => handleButtonClick("tio_button1")}
            >
              Try It Out!
            </button>
          </div>
          <div
            className="item"
            style={{
              height:
                MIN_DESCRIPTION_HEIGHT +
                (MAX_DESCRIPTION_HEIGHT - MIN_DESCRIPTION_HEIGHT) *
                  animateBoxHover2,
              width:
                MIN_DESCRIPTION_WIDTH +
                (MAX_DESCRIPTION_WIDTH - MIN_DESCRIPTION_WIDTH) *
                  animateBoxHover2,
            }}
            onMouseEnter={(event) => {
              setHoveringButton2(true);
            }}
            onMouseLeave={(event) => {
              setHoveringButton2(false);
            }}
          >
            <div className="icon_images">
              <img className="box_images" src="image-3.png" alt=""></img>
            </div>
            <div className="box_title">Voice2Sign</div>
            <div className="discription2" id="subtitle2">
              Voice2Sign
            </div>
            <div
              style={{
                ...(hoveringButton2
                  ? hoveringDescriptionStyle
                  : notHoveringDescStyle),
                textAlign: "center",
                height: 90,
                color: "white",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              {description2.substring(
                0,
                Math.round(description2.length * animateTextHover2)
              )}
            </div>
            <button
              style={{
                ...(hoveringButton2
                  ? hoveringDescriptionStyle
                  : notHoveringDescStyle),
                fontSize: MAX_FONT_SIZE * animateHover2,
                opacity: animateBoxHover2,
              }}
              id="tio_button2"
              onClick={() => handleButtonClick("tio_button2")}
            >
              Try It Out!
            </button>
          </div>
          <div
            className="item"
            style={{
              height:
                MIN_DESCRIPTION_HEIGHT +
                (MAX_DESCRIPTION_HEIGHT - MIN_DESCRIPTION_HEIGHT) *
                  animateBoxHover3,
              width:
                MIN_DESCRIPTION_WIDTH +
                (MAX_DESCRIPTION_WIDTH - MIN_DESCRIPTION_WIDTH) *
                  animateBoxHover3,
            }}
            onMouseEnter={(event) => {
              setHoveringButton3(true);
            }}
            onMouseLeave={(event) => {
              setHoveringButton3(false);
            }}
          >
            <div className="icon_images">
              <img
                className="box_images"
                alt=""
                src="live.png"
              ></img>
            </div>
            <div className="box_title">SignExpress</div>
            <div className="discription3" id="subtitle3">
              SignExpress
            </div>
            <div
              style={{
                ...(hoveringButton3
                  ? hoveringDescriptionStyle
                  : notHoveringDescStyle),
                textAlign: "center",
                height: 90,
                color: "white",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              {description3.substring(
                0,
                Math.round(description3.length * animateTextHover3)
              )}
            </div>
            <button
              style={{
                ...(hoveringButton3
                  ? hoveringDescriptionStyle
                  : notHoveringDescStyle),
                fontSize: MAX_FONT_SIZE * animateHover3,
                opacity: animateBoxHover3,
              }}
              id="tio_button3"
              onClick={() => handleButtonClick("tio_button3")}
            >
              Try It Out!
            </button>
          </div>
        </div>
        <div className="App">
          <h2 class="feature">Text2Sign</h2>
          <form class="form" onSubmit={handleSubmit}>
            <label htmlFor="text-input">
              <textarea
                id="text-input"
                value={userInput}
                placeholder="Type here. (500 word maximum)"
                onChange={handleInputChange}
                rows={10}
                cols={50}
              />
            </label>
            <br />
            <button class="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> Translate Audio to Sign Language</h3>
          </div>
        </div>
      </div>
      <button>
        <div class="container-2">
          <div class="btn btn-two">
            <span>Click</span>
          </div>
        </div>
      </button>
      <div class="container">
        <p>Click the button to start recording!</p>
      </div>
      <div class="container">
      <button class="record_button">
        <div class="wrap">
          <button class="record_button"><img src="microphone.png" width="50" height="50"/></button>
        </div>
      </button>
      </div>
        <span className="caption" ref={caption}>
          Scroll down
        </span>
      </div>
      

      
    );
  }
);
export default Overlay;
