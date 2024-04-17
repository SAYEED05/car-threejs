import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import "./App.css";
import { Circle } from "./Circle";
import { GvCar } from "./GvCar";
import CustomizeMenu from "./components/CustomizeMenu";

function CarShow() {
  const [env, setEnv] = useState("/hdri/spiaggia_di_mondello_4k.exr");
  const [carColor, setCarColor] = useState({ r: 0.2, g: 0, b: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OrbitControls
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        minDistance={20}
        maxDistance={100}
      />
      <PerspectiveCamera makeDefault fov={50} position={[20, 2, 60]} />
      <Environment
        files={env}
        backgroundBlurriness={0}
        blur={0}
        backgroundIntensity={100}
        background
        ground={[0, 0.35, 0]}
        environmentIntensity={1}
      />
      <GvCar carColor={carColor} />
      <Circle />
      <CustomizeMenu
        setCarColor={setCarColor}
        togglePopup={togglePopup}
        isOpen={isOpen}
        env={env}
        setEnv={setEnv}
      />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas shadows>
        <CarShow />
        <Stats />
      </Canvas>
    </Suspense>
  );
}

export default App;
