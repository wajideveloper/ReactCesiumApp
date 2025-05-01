import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "cesium/Build/Cesium/Widgets/widgets.css";
import CesiumViewer from "./component/CesiumViewer";
import AppLayout from "./pages/AppLayout";
import { MantineProvider } from "@mantine/core";
// import Building3D from "./Building3D";

// Cesium.Ion.defaultAccessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjY2RiMGUzMS0xMTEwLTQwMjktOWExNi05YTBhNTI0NTI4YzciLCJpZCI6MTY4MzY0LCJpYXQiOjE2OTU2Mjg0MzJ9.5EHxWG_vXoaaGrWG8RM0vQSNf_ubip82SSWmooh9wOY";

// Cesium.AccessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjY2RiMGUzMS0xMTEwLTQwMjktOWExNi05YTBhNTI0NTI4YzciLCJpZCI6MTY4MzY0LCJpYXQiOjE2OTU2Mjg0MzJ9.5EHxWG_vXoaaGrWG8RM0vQSNf_ubip82SSWmooh9wOY";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MantineProvider>
        {/* <div className="app">
        <h1>Cesium in React</h1>
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      </div> */}
        {/* <CesiumViewer /> */}
        <AppLayout />
        {/* <Building3D /> */}
        {/* <div id="cesiumContainer"></div> */}
      </MantineProvider>
    </>
  );
}

export default App;
