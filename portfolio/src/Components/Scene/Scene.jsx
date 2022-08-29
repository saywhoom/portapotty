import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "../Models/index";
import Text from "../Text/Text";
import "./Scene.css";
import Loader from "../Loader/Loader";

const Scene = ({ noDisplay }) => {
  return (
    <>
      <div id='canvas' className='canvas-container'>
        <Canvas dpr={(window.devicePixelRatio, 1)}>
          <Suspense fallback={null}>
            <Model />
            <Environment preset='sunset' />
          </Suspense>
        </Canvas>
      </div>

      {noDisplay ? (
        <div className='loader-container'>
          <Loader />
        </div>
      ) : (
        <Text />
      )}
    </>
  );
};

export default Scene;
