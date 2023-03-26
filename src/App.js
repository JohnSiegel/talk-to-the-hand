import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Overlay from "./Overlay";
import Model from "./Model";

function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  const [backgroundColor, setBackgroundColor] = useState(0);
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
          r={backgroundColor}
          g={backgroundColor}
          b={backgroundColor}
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
      />
    </>
  );
}

export default App;
