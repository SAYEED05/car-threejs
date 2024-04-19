import React, { Suspense, useEffect, useRef, useState } from "react";
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
import { gsap } from "gsap";

function CarShow() {
  const cameraRef = useRef();
  const [env, setEnv] = useState("/hdri/spiaggia_di_mondello_4k.exr");
  const [carColor, setCarColor] = useState({ r: 0.2, g: 0, b: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0, yoyo: false });
    tl.to(cameraRef.current.position, {
      duration: 2,
      x: -62,
      y: 10,
      z: 8,
      ease: "power2.inOut",
    }).to(cameraRef.current.position, {
      duration: 2,
      x: 20,
      y: 2,
      z: 60,
      ease: "power2.inOut",
    });
  }, []);

  const annotations = [
    {
      x: 7,
      y: 10,
      z: 0.215,
      tag: "test",
      onclick: () => {
        gsap.to(cameraRef.current.position, {
          duration: 2,
          x: 13,
          y: 15,
          z: -1,
          ease: "power2.inOut",
        });
      },
    },
    {
      x: 7,
      y: 3,
      z: 10,
      tag: "test2",
      onclick: () => {
        gsap.to(cameraRef.current.position, {
          duration: 2,
          x: 15,
          y: 7,
          z: 15,
          ease: "power2.inOut",
        });
      },
    },
  ];

  return (
    <>
      <OrbitControls
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        minDistance={20}
        maxDistance={100}
      />
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[-0, 64, -0]}
        ref={cameraRef}
      />
      <Environment
        files={env}
        backgroundBlurriness={0}
        blur={0}
        backgroundIntensity={100}
        background
        ground={[0, 0.35, 0]}
        environmentIntensity={1}
      />
      <GvCar carColor={carColor} annotations={annotations} />
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
