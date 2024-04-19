import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function GvCar({ carColor, annotations }) {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/gv/GV.gltf"
  );

  useEffect(() => {
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(0, -0.035, 15);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        if (
          [
            "GRAND_VITARA_EX_CARBODY_MESH",
            "D22_EX_V_HYBRID_BOOTDOOR_MESH007_3",
          ].includes(object.name)
        ) {
          object.material.color.r = carColor.r;
          object.material.color.g = carColor.g;
          object.material.color.b = carColor.b;
        }
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf, carColor]);

  return (
    <>
      {annotations.map((item, index) => (
        <Annotation
          key={index}
          item={item}
          position={[item.x, item.y, item.z]}
        />
      ))}
      <primitive object={gltf.scene} />
    </>
  );
}

function Annotation({ position, item }) {
  const ref = useRef();

  useFrame(({ camera }) => {
    console.log(camera, "camera");
    if (ref.current) {
      const { x, y, z } = ref.current.position ?? {};
      const deltaX = camera.position.x - x;
      const deltaY = camera.position.y - y;
      const deltaZ = camera.position.z - z;
      const angleY = Math.atan2(deltaX, deltaZ);
      const angleX = Math.atan2(
        Math.sqrt(deltaX * deltaX + deltaZ * deltaZ),
        deltaY
      );

      ref.current.style.transform = `translate(-50%, -50%) rotateX(${angleX}rad) rotateY(${angleY}rad)`;
    }
  });

  return (
    <Html position={position} occlude scale={1} castShadow>
      <div
        ref={ref}
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          borderRadius: "100px",
          border: "5px solid #fff",
          cursor: "pointer",
        }}
        onClick={item.onclick}
      ></div>
    </Html>
  );
}
