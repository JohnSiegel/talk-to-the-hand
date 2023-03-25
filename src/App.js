import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Overlay from "./Overlay";
import Model from "./Model";

function App() {
  const [pyodide, setPyodide] = useState(null);
  const [addedScript, setAddedScript] = useState(false);
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  useEffect(() => {
    if (!addedScript) {
      const $pyodide = document.createElement("script");
      $pyodide.src = "https://cdn.jsdelivr.net/pyodide/dev/full/pyodide.js";
      $pyodide.type = "text/javascript";
      $pyodide.onload = () => {
        setAddedScript(true);
      };
      document.head.appendChild($pyodide);
    } else if (pyodide == null) {
      window
        .loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/dev/full/",
        })
        .then((py) => {
          setPyodide(py);
        });
    }
  }, [addedScript, setAddedScript, pyodide]);
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
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} pyodide={pyodide} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay
        ref={overlay}
        caption={caption}
        scroll={scroll}
        pyodide={pyodide}
      />
    </>
  );
}

export default App;
