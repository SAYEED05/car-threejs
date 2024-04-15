import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import "./App.css";
import { Ground } from "./Ground";
import { Car } from "./Car";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      {/* <directionalLight position={[10, 20, 5]} intensity={20} /> */}
      <color args={[0, 0, 0]} attach="background" />
      {/* <spotLight
        color={[1, 0.25, 0.7]}
        intensity={150}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={200}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      /> */}
      <spotLight
        color={[10, 10, 10]}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[5, 15, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[10, 10, 10]}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[-35, 15, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Car />
      <Ground />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
        <Stats />
      </Canvas>
    </Suspense>
  );
}

export default App;
