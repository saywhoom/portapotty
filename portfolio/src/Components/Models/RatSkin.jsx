import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function RatSkin({ deviceType, deviceHeight }) {
  const { scene } = useGLTF("/assets/RatSuit.glb");
  const { camera } = useThree();
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.lookAt(camera.position);
    const a = clock.getElapsedTime() * 0.8;
    ref.current.rotation.y = a;
  });

  //to float
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   ref.current.rotation.z = 0.1 - (1 + Math.sin(t / 1.5)) / 20;
  //   ref.current.rotation.x = Math.cos(t / 4) / 14;
  // });

  scene.scale.set(
    deviceType === "XS" ? 7 : deviceType === "M" ? 11 : 14,
    deviceType === "XS" ? 7 : deviceType === "M" ? 11 : 14,
    deviceType === "XS" ? 7 : deviceType === "M" ? 11 : 14
  );

  return (
    <primitive
      ref={ref}
      position={[
        deviceType === "M"
          ? 0.5
          : deviceType === "S" || deviceType === "XS"
          ? 0
          : 1.4,
        deviceHeight === "M" ? -3 : deviceHeight === "L" ? -3.4 : -3.2,
        0,
      ]}
      object={scene}
    />
  );
}
