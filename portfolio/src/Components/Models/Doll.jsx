import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Doll({ deviceType, deviceHeight }) {
  const { scene } = useGLTF("/assets/doll.glb");
  const ref = useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current.rotation.y = -a;
  });

  scene.scale.set(
    deviceType === "XS" ? 0.05 : deviceType === "M" ? 0.07 : 0.088,
    deviceType === "XS" ? 0.05 : deviceType === "M" ? 0.07 : 0.088,
    deviceType === "XS" ? 0.05 : deviceType === "M" ? 0.07 : 0.088
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
        deviceHeight === "S" ? -1.95 : deviceHeight === "L" ? -2.25 : -1.3,
        0,
      ]}
      object={scene}
    />
  );
}

export default Doll;
