import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particle-config";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default ParticleBackground;
