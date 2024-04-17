import React from "react";

export function Circle() {
  return (
    <group>
      <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
        <ringGeometry attach="geometry" args={[30, 30.25, 100]} />
        <meshBasicMaterial attach="material" color="#fff" />
      </mesh>
    </group>
  );
}
