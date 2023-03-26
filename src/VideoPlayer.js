import React, { useState, useRef, useEffect } from "react";
import { Player, ControlBar } from "video-react";

const ANIM_DURATION = 300;
const ANIM_RATE = 30;

const VideoPlayer = ({ filenames, onDone }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingOpacity, setAnimatingOpacity] = useState(1);
  const [updateAnim, setUpdateAnim] = useState(0);
  const player = useRef();

  useEffect(() => {
    if (player.current != null) {
      if (
        player.current.getState().player.duration -
          player.current.getState().player.currentTime <
        player.current.getState().player.duration / 5
      ) {
        const timeout = setTimeout(() => {
          setAnimatingOpacity(
            Math.max(animatingOpacity - ANIM_RATE / ANIM_DURATION, 0)
          );
        }, ANIM_RATE);
        return () => clearTimeout(timeout);
      } else if (
        player.current.getState().player.duration -
          player.current.getState().player.currentTime >
        player.current.getState().player.duration / 5
      ) {
        const timeout = setTimeout(() => {
          setAnimatingOpacity(
            Math.min(animatingOpacity + ANIM_RATE / ANIM_DURATION, 1)
          );
        }, ANIM_RATE);
        return () => clearTimeout(timeout);
      }
    }
  }, [player, setAnimatingOpacity, animatingOpacity, currentIndex, updateAnim]);

  useEffect(() => {
    if (currentIndex !== 0) {
      player.current.load();
    }
  }, [currentIndex]);

  useEffect(() => {
    if (player.current != null) {
      player.current.subscribeToStateChange((state) => {
        if (state.ended) {
          if (currentIndex + 1 < filenames.length) {
            setCurrentIndex(currentIndex + 1);
          } else {
            onDone();
          }
        } else {
          setUpdateAnim(updateAnim + 1);
        }
      });
    }
  }, [player, filenames, currentIndex, onDone, setCurrentIndex, updateAnim]);

  return (
    // <div style={{ position: "abolute" }}>
    //   <button>
    //     <a
    //       href="https://www.flaticon.com/free-icons/previous"
    //       title="previous icons"
    //     >
    //       Previous icons created by logisstudio - Flaticon
    //     </a>
    //   </button>
    <div className="App" style={{ transform: "translate(-25%)" }}>
      <div
        style={{
          width: "275px",
          top: "8%",
          transform: "translate(60%)",
          opacity: animatingOpacity,
        }}
      >
        <Player ref={player} autoPlay muted>
          {filenames.length > currentIndex ? (
            <source src={filenames[currentIndex]} />
          ) : (
            <> </>
          )}
          <ControlBar disableCompletely />
        </Player>
        <div className="box_title" style={{ color: "black" }}>
          {filenames.length > currentIndex
            ? filenames[currentIndex].split("/")[2].split(".")[0]
            : ""}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default VideoPlayer;
