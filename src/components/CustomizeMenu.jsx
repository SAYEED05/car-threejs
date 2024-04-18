import React from "react";
import { customEnvs, hexToBlenderRGB } from "../utils";
import { Html } from "@react-three/drei";

const CustomizeMenu = ({ setCarColor, togglePopup, isOpen, env, setEnv }) => {
  return (
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
            onChange={(e) => setCarColor(hexToBlenderRGB(e.target.value))}
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
                {customEnvs.map((item) => (
                  <div
                    style={{
                      height: "40px",
                      width: "80px",
                      padding: "20px",
                      cursor: "pointer",
                      background:
                        item.path === env
                          ? "#f6f4da"
                          : "rgba( 255, 255, 255, 0.25 )",
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
                    onClick={() => setEnv(item.path)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Html>
  );
};

export default CustomizeMenu;
