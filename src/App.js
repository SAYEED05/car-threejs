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
import { Car } from "./Car";
import EnvironmentMenu from "./components/EnvironmentMenu";

function CarShow() {
  const [env, setEnv] = useState("forest");
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[20, 2, 50]} />

      <Car />
      <Environment
        preset={env}
        backgroundBlurriness={0}
        blur={0}
        background
        ground={[0, 0.35, 0]}
        environmentIntensity={1}
      />
      <EnvironmentMenu setEnv={setEnv} />
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
