import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function GvCar({ carColor }) {
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

  return <primitive object={gltf.scene} />;
}
