import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Stickman({ deviceType, deviceHeight }) {
  const { scene } = useGLTF("/assets/Stickman.glb");
  const ref = useRef();

  //to rotate
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current.rotation.y = a;
  });

  //to float
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   ref.current.rotation.z = 0.2 - (1 + Math.sin(t / 1.5)) / 20;
  //   ref.current.rotation.x = Math.cos(t / 4) / 12;
  // });

  scene.rotation.set(0, Math.PI, 0);
  scene.scale.set(
    deviceType === "XS" ? 0.25 : deviceType === "M" ? 0.3 : 0.35,
    deviceType === "XS" ? 0.25 : deviceType === "M" ? 0.3 : 0.35,
    deviceType === "XS" ? 0.25 : deviceType === "M" ? 0.3 : 0.35
  );

  return (
    <primitive
      ref={ref}
      position={[
        deviceType === "M"
          ? -0.5
          : deviceType === "S" || deviceType === "XS"
          ? 0
          : -1.4,
        deviceHeight === "S"
          ? 0.05
          : deviceHeight === "M"
          ? 1.4
          : deviceHeight === "L"
          ? -0.55
          : 0.95,
        0,
      ]}
      object={scene}
    />
  );
}
