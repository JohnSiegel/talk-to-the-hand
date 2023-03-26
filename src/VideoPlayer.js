import React, { useState, useRef, useEffect } from "react";
import { Player, ControlBar } from "video-react";

const ANIM_DURATION = 200;
const ANIM_RATE = 30;

const VideoPlayer = ({ filenames, onDone }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animatingOpacity, setAnimatingOpacity] = useState(1);
  const player = useRef();

  useEffect(() => {
    if (player.current != null) {
      if (animating) {
        const timeout = setTimeout(() => {
          setAnimatingOpacity(
            Math.max(animatingOpacity - ANIM_RATE / ANIM_DURATION, 0)
          );
        }, ANIM_RATE);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setAnimatingOpacity(
            Math.min(animatingOpacity + ANIM_RATE / ANIM_DURATION, 1)
          );
        }, ANIM_RATE);
        return () => clearTimeout(timeout);
      }
    }
  }, [player, setAnimatingOpacity, animatingOpacity, animating]);

  useEffect(() => {
    if (currentIndex === 0 && player.current != null) {
      player.current.subscribeToStateChange((state) => {
        if (
          state.duration - state.currentTime < ANIM_DURATION / 400.0 &&
          !animating
        ) {
          setAnimating(true);
        }
        if (state.ended) {
          if (currentIndex <= filenames.length - 1) {
            setCurrentIndex(currentIndex + 1);
            player.current.load();
            // const timeout = setTimeout(() => {
            setAnimating(false);
            // }, ANIM_DURATION);
            // return () => clearTimeout(timeout);
          } else {
            onDone();
          }
        }
      });
    }
  }, [
    player,
    filenames,
    currentIndex,
    onDone,
    setCurrentIndex,
    animating,
    animatingOpacity,
    setAnimatingOpacity,
  ]);
  return (
    <div
      style={{
        width: "160px",
        position: "absolute",
        left: "50%",
        transform: "(-%50)",
        opacity: animatingOpacity,
      }}
    >
      <Player ref={player} autoPlay muted>
        <source src={filenames[currentIndex]} />
        <ControlBar disableCompletely />
      </Player>
    </div>
  );
};

export default VideoPlayer;
