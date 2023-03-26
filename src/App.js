import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Overlay from "./Overlay";
import Model from "./Model";
import VideoPlayer from "./VideoPlayer";

const LIGHT_COLOR = {
  r: 44 / 255,
  g: 0 / 255,
  b: 63 / 255,
};

const DARK_COLOR = {
  r: 0,
  g: 0,
  b: 0,
};

function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  const currentFeatureState = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(0);
  console.log({
    r: DARK_COLOR.r + (LIGHT_COLOR.r - DARK_COLOR.r) * backgroundColor,
    g: DARK_COLOR.g + (LIGHT_COLOR.g - DARK_COLOR.g) * backgroundColor,
    b: DARK_COLOR.b + (LIGHT_COLOR.b - DARK_COLOR.b) * backgroundColor,
  });
  return (
    <>
      <Canvas
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        raycaster={{
          computeOffsets: ({ clientX, clientY }) => ({
            offsetX: clientX,
            offsetY: clientY,
          }),
        }}
      >
        <color
          attach={"background"}
          r={DARK_COLOR.r + (LIGHT_COLOR.r - DARK_COLOR.r) * backgroundColor}
          g={DARK_COLOR.g + (LIGHT_COLOR.g - DARK_COLOR.g) * backgroundColor}
          b={DARK_COLOR.b + (LIGHT_COLOR.b - DARK_COLOR.b) * backgroundColor}
        />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay
        ref={overlay}
        caption={caption}
        scroll={scroll}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        currentFeatureState={currentFeatureState}
      />
      {/* <VideoPlayer
        onDone={(event) => {}}
        filenames={["/movies/IMG_0518.mov", "/movies/yes.mov"]}
      ></VideoPlayer> */}
    </>
  );
}

export default App;
