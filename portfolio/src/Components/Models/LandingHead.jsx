import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";
let target = new Vector3();

const LandingHead = ({ deviceType, deviceHeight }) => {
  const { scene } = useGLTF("/assets/landingHead.glb");
  scene.scale.set(
    deviceType === "XS" ? 0.25 : 0.3,
    deviceType === "XS" ? 0.25 : 0.3,
    deviceType === "XS" ? 0.25 : 0.3
  );
  scene.rotation.set(0.3, Math.PI, 0);
  const ref = useRef();
  const { camera } = useThree();

  document.addEventListener("mousemove", (e) => {
    if (ref.current) {
      target.set(
        (e.clientX - window.innerWidth / 2.2) * 0.02,
        (e.clientY - window.innerHeight / 2) * -0.02,
        camera.position.z
      );

      ref.current.lookAt(target);
      ref.current.rotateY(Math.PI);
    }
  });

  return (
    <>
      <primitive
        ref={ref}
        object={scene}
        position={[
          0,
          deviceHeight === "S"
            ? 0.95
            : deviceHeight === "M"
            ? 2.6
            : deviceHeight === "L"
            ? 0.22
            : 2.4,
          0,
        ]}
      />
      ;
    </>
  );
};

export default LandingHead;
