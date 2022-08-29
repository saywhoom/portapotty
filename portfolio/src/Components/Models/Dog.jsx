import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Dog({ deviceType, deviceHeight }) {
  const { scene } = useGLTF("/assets/dog.glb");
  const ref = useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current.rotation.y = -a;
  });

  scene.scale.set(
    deviceType === "XS" ? 0.2 : deviceType === "M" ? 0.25 : 0.3,
    deviceType === "XS" ? 0.2 : deviceType === "M" ? 0.25 : 0.3,
    deviceType === "XS" ? 0.2 : deviceType === "M" ? 0.25 : 0.3
  );

  scene.rotation.set(0, Math.PI - 0.7, 0);
  return (
    <primitive
      ref={ref}
      position={[
        deviceType === "M"
          ? 0.4
          : deviceType === "S" || deviceType === "XS"
          ? 0
          : 1.4,
        deviceHeight === "S"
          ? -1.1
          : deviceHeight === "M"
          ? -0.1
          : deviceHeight === "L"
          ? -1.5
          : -0.4,
        0,
      ]}
      object={scene}
    />
  );
}

export default Dog;
