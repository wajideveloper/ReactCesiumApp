import React from "react";
import styles from "./AppLayout.module.css";
import SideBar from "../component/SideBar";
// import MapCesium from "../component/MapCesium";
// import Building3D from "../component/Building3D";
import CesiumViewer from "../component/CesiumViewer";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Box } from "@mantine/core";

const AppLayout = () => {
  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50vw",
          border: "2px solid red",
        }}
      >
        <SideBar />
      </div>
      <div
        style={{
          width: "50vw",
          border: "2px solid green",
        }}
      >
        <CesiumViewer />
      </div>
    </Box>
  );
};

export default AppLayout;
