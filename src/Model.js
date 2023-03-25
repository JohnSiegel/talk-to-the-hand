import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

const MODEL_Y = -150;

const CAMERA_START_Y = 600;
const CAMERA_END_Y = 0;

const CAMERA_START_X = -10;
const CAMERA_END_X = -150;

const SCROLL_THRESH = 0.85;

const MODEL_START_ROT = 0;
const MODEL_END_ROT = Math.PI / 4;

export default function Model({ scroll }) {
  const gltf = useGLTF("/scene.glb", false);
  const camera = useRef();
  const model = useRef();
  useFrame((state) => {
    camera.current.position.y =
      CAMERA_START_Y - scroll.current * Math.abs(CAMERA_END_Y - CAMERA_START_Y);
    model.current.rotation.y =
      (Math.max(scroll.current - SCROLL_THRESH, 0) / (1 - SCROLL_THRESH)) *
        (MODEL_END_ROT - MODEL_START_ROT) +
      MODEL_START_ROT;
    camera.current.position.x =
      (Math.max(scroll.current - SCROLL_THRESH, 0) / (1 - SCROLL_THRESH)) *
        (CAMERA_START_X - CAMERA_END_X) +
      CAMERA_START_X;
  });
  return (
    <group dispose={null}>
      <group
        ref={model}
        position={[0, MODEL_Y, 0.35]}
        rotation={[0, MODEL_START_ROT, 0]}
      >
        <primitive object={gltf.scene} />
      </group>
      <group
        name="Camera"
        ref={camera}
        position={[CAMERA_START_X, CAMERA_START_Y, 210]}
      >
        <PerspectiveCamera makeDefault>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.glb");
