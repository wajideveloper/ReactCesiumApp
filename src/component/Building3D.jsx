import { useEffect, useRef } from "react";
import * as Cesium from "cesium";
import {
  Ion,
  Math as CesiumMath,
  Viewer,
  Cartesian3,
  Color,
  Terrain,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjY2RiMGUzMS0xMTEwLTQwMjktOWExNi05YTBhNTI0NTI4YzciLCJpZCI6MTY4MzY0LCJpYXQiOjE2OTU2Mjg0MzJ9.5EHxWG_vXoaaGrWG8RM0vQSNf_ubip82SSWmooh9wOY";

const flightData = [
  { longitude: -122.39053, latitude: 37.61779, height: -27.32 },
  { longitude: -122.39035, latitude: 37.61803, height: -27.32 },
];

const Building3D = () => {
  const cesiumContainerRef = useRef(null);

  useEffect(() => {
    const initCesium = async () => {
      const viewer = new Viewer(cesiumContainerRef.current, {
        globe: false,
        geocoder: Cesium.IonGeocodeProviderType.GOOGLE,
      });

      // Enable rendering the sky
      viewer.scene.skyAtmosphere.show = true;

      // Add Google Photorealistic 3D Tiles
      try {
        const tileset = await Cesium.createGooglePhotorealistic3DTileset({
          onlyUsingWithGoogleGeocoder: true,
        });
        viewer.scene.primitives.add(tileset);
      } catch (error) {
        console.log("Error loading Photorealistic 3D Tiles tileset.", error);
      }

      // Point the camera at the Googleplex (or adjust for flight data area)
      viewer.scene.camera.setView({
        destination: new Cartesian3(
          -2693797.551060477,
          -4297135.517094725,
          3854700.7470414364
        ),
        orientation: new Cesium.HeadingPitchRoll(
          4.6550106925119925,
          -0.2863894863138836,
          1.3561760425773173e-7
        ),
      });

      // Add flight data points
      flightData.forEach((dataPoint) => {
        viewer.entities.add({
          description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
          position: Cartesian3.fromDegrees(
            dataPoint.longitude,
            dataPoint.latitude,
            dataPoint.height
          ),
          point: {
            pixelSize: 10,
            color: Color.RED,
          },
        });
      });
    };

    initCesium();

    return () => {
      // Cleanup
      if (cesiumContainerRef.current) {
        cesiumContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={cesiumContainerRef} />;
};

export default Building3D;
