import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, MeshBasicMaterial } from "three";

// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a)
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function GvCar({ carColor }) {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/gv/GV.gltf"
  );

  const wheelRotation = 4;
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

  // useFrame((state, delta) => {
  //   let t = state.clock.getElapsedTime();
  //   let group = gltf.scene.children[0].children[0].children[0];
  //   group.children[0].rotation.x = t * wheelRotation;
  //   group.children[2].rotation.x = t * wheelRotation;
  //   group.children[4].rotation.x = t * wheelRotation;
  //   group.children[6].rotation.x = t * wheelRotation;
  // });

  return <primitive object={gltf.scene} />;
}
