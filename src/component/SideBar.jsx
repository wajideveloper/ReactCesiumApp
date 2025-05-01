import React from "react";
import styles from "./SideBar.module.css";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Map from "react-map-gl/mapbox";
const TOKEN =
  "pk.eyJ1IjoiYXJmYWtsIiwiYSI6ImNsYnQzd284eDA5OGUzcHBmc2VjOTJ4dzEifQ.RFRiN_WHNN8c4zO7nt2XLA";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Map
        mapboxAccessToken={TOKEN}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={styles.mapStyle}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default SideBar;
