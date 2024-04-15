import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function App() {
  return (
    <Suspense fallback={<>Oops Something Went Wrong</>}>
      <Canvas shadows>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
      </Canvas>
    </Suspense>
  );
}

export default App;
