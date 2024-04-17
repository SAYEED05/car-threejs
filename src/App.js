import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Html,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import "./App.css";
import { Car } from "./Car";
import EnvironmentMenu from "./components/EnvironmentMenu";
import { Circle } from "./Circle";

const environmentsAvaiable = [
  // "apartment",
  "city",
  "dawn",
  "forest",
  "lobby",
  "night",
  "park",
  // "studio",
  "sunset",
  "warehouse",
];

function CarShow() {
  const [env, setEnv] = useState("park");
  const [carColor, setCarColor] = useState({ r: 0.2, g: 0, b: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  function hexTorgb(hexValue) {
    const color = hexValue.target.value;
    const r = parseInt(color.substr(1, 2), 16) / 100;
    const g = parseInt(color.substr(3, 2), 16) / 100;
    const b = parseInt(color.substr(5, 2), 16) / 100;
    console.log(`red: ${r}, green: ${g}, blue: ${b}`);
    return { r, g, b };
  }
  const Buttons = [
    {
      name: "Change Tyre",
      icon: "/icons/tyre.png",
      action: () => console.log("changed tyre"),
    },
  ];

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[20, 2, 60]} />

      <Environment
        preset={env}
        backgroundBlurriness={0}
        blur={0}
        backgroundIntensity={100}
        background
        ground={[0, 0.35, 0]}
        environmentIntensity={1}
      />
      <Car carColor={carColor} />
      <Circle />
      {/* <EnvironmentMenu setEnv={setEnv} /> */}
      <Html scale={1} occlude transform position={[30, 1, 25]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div id="car_color_picker_wrapper">
            <input
              type="color"
              id="car_color_picker"
              onChange={(e) => setCarColor(hexTorgb(e))}
              style={{
                display: "none",
              }}
            />
            <label for="car_color_picker">
              <img
                src="/icons/airbrush.png"
                alt="airbrush"
                style={{
                  height: "80px",
                  width: "80px",
                  padding: "20px",
                  cursor: "pointer",
                  background: "rgba( 255, 255, 255, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  borderRadius: "10px",
                  border: "1px solid rgba( 255, 255, 255, 0.18 )",
                }}
              />
            </label>
          </div>
          <div></div>
          <div id="env_select_wrapper" onClick={() => togglePopup(true)}>
            <img
              src="/icons/scenery.png"
              alt="scenery"
              style={{
                height: "80px",
                width: "80px",
                padding: "20px",
                cursor: "pointer",
                background: "rgba( 255, 255, 255, 0.25 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            />
          </div>
          {isOpen && (
            <div
              className="popup"
              style={{
                transition: "all 250ms",
              }}
            >
              <div
                className="popup-content"
                style={{
                  transition: "all 250ms",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  {environmentsAvaiable.map((item) => (
                    <div
                      style={{
                        height: "40px",
                        width: "80px",
                        padding: "20px",
                        cursor: "pointer",
                        background: "rgba( 255, 255, 255, 0.25 )",
                        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 4px )",
                        borderRadius: "10px",
                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                      }}
                      key={item}
                      onClick={() => setEnv(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Html>
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
