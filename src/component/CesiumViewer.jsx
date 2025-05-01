import { useEffect, useRef } from "react";
import * as Cesium from "cesium";
import flightDataPoints from "./flightDataPoints";
import { Cartesian3, Math as CesiumMath } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import styles from "./MapCesium.module.css";
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjY2RiMGUzMS0xMTEwLTQwMjktOWExNi05YTBhNTI0NTI4YzciLCJpZCI6MTY4MzY0LCJpYXQiOjE2OTU2Mjg0MzJ9.5EHxWG_vXoaaGrWG8RM0vQSNf_ubip82SSWmooh9wOY";

const CesiumViewer = () => {
  const cesiumContainerRef = useRef(null);

  useEffect(() => {
    Cesium.Ion.defaultAccessToken = Cesium.Ion.defaultAccessToken;
    const viewer = new Cesium.Viewer(cesiumContainerRef.current, {
      terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    viewer.camera.flyTo({
      //   destination: Cesium.Cartesian3.fromDegrees(69.3451, 30.3753, 1000),
      destination: Cartesian3.fromDegrees(-122.3905, 37.6178, 500),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      },
    });

    Cesium.createOsmBuildingsAsync().then((buildingTileset) => {
      viewer.scene.primitives.add(buildingTileset);
    });

    // Add flight data points to the Cesium viewer
    flightDataPoints.forEach((dataPoint) => {
      viewer.entities.add({
        description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
        position: Cartesian3.fromDegrees(
          dataPoint.longitude,
          dataPoint.latitude,
          dataPoint.height
        ),
        point: {
          pixelSize: 10,
          color: Cesium.Color.RED,
        },
      });
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div ref={cesiumContainerRef} className={styles.map} />;
};

export default CesiumViewer;
