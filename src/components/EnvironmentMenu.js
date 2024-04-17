import React from "react";
import { Html } from "@react-three/drei";
const EnvironmentMenu = ({ setEnv }) => {
  const environmentsAvaiable = [
    "apartment",
    "city",
    "dawn",
    "forest",
    "lobby",
    "night",
    "park",
    "studio",
    "sunset",
    "warehouse",
  ];

  return (
    <Html>
      <div
        style={{
          background: "#000",
          padding: "8px",
          color: "#fff",
          minWidth: "200px",
          position: "fixed",
          top: 0,
          right: 0,
        }}
      >
        <p>Avaialble Envs</p>
        {environmentsAvaiable.map((item) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              key={item}
              onClick={() => setEnv(item)}
            >
              {item.toUpperCase()}
            </div>
          );
        })}
      </div>
    </Html>
  );
};

export default EnvironmentMenu;
