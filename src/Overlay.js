import React, { forwardRef} from "react";
import'./styles.css';


const Overlay = forwardRef(({ caption, scroll }, ref) => {
  return(
  <div 
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current < 0.05 ? "Scroll down" : "";
    }}
    class="scroll"
  >
    <div class="gradient">
        <div>
            <img class="logo" src="placeholder_logo.png" alt="" ></img>
            <h1>TALK TO THE HAND</h1>
        </div>
    </div>
    <div><h1>Features</h1></div>
    <div class="container">
        <div class="item" id="box1">
            <div class="icon_images">
            <img class="box_images" src="T2ASL_Placeholder.png" alt=""></img>
            </div>
            <div class="box_title">Text to ASL</div>
            <div class="discription1">TEXT TO ASL<br/>Paste your text to receive it in American Sign Language!</div>
            <div class ="discription1" id="tio_button1">Try It Out!</div>
            <ul class="discription1" id="list1">
                <li class="checkmark">Feature1</li>
                <li class="checkmark">Feature2</li>
                <li class="checkmark">Feature3</li>
                <li class="checkmark">Feature4</li>
            </ul>
        </div>
        <div class="item" id="box2">
            <div class="icon_images">
            <img class="box_images" src="Speech2ASL_Placehoder.png" alt=""></img>
            </div>
            <div class="box_title">Text to ASL</div>
            <div class="discription2">TEXT TO ASL<br/>Paste your text to receive it in American Sign Language!</div>
            <div class ="discription2" id="tio_button2">Try It Out!</div>
            <ul class="discription2" id="list2">
                <li class="checkmark">Feature1</li>
                <li class="checkmark">Feature2</li>
                <li class="checkmark">Feature3</li>
                <li class="checkmark">Feature4</li>
            </ul>
        </div>
        <div class="item" id="box3">
            <div class="icon_images">
            <img class="box_images" alt="" src="LiveSTT_Placehoder.jpg"></img>
            </div>
            <div class="box_title">TEXT2SIGN</div>
            <div class="discription3">TEXT TO ASL<br/>Paste your text to receive it in American Sign Language!</div>
            <div class ="discription3" id="tio_button3">Try It Out!</div>
            <ul class="discription3" id="list3">
                <li class="checkmark">Feature1</li>
                <li class="checkmark">Feature2</li>
                <li class="checkmark">Feature3</li>
                <li class="checkmark">Feature4</li>
            </ul>
        </div>
    </div>
    <span className="caption" ref={caption}>
      Scroll down
    </span>
  </div>
)});
  
export default Overlay;
