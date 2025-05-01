import React from "react";
import styles from "./MapCesium.module.css";
import CesiumViewer from "./CesiumViewer";
import Building3D from "./Building3D";

const MapCesium = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Building3D />
    </div>
  );
};

export default MapCesium;
