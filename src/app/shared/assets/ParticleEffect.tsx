import React, { type ReactElement } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleEffect = ({
  contentHeight
}: {
  contentHeight: number;
}): ReactElement => {
  const particlesInit = async (engine: any): Promise<void> => {
    await loadFull(engine);
  };

  return (
    <Particles
      height={`${contentHeight}px`}
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 25 },
          size: { value: 5 },
          move: {
            enable: true,
            speed: 2,
            direction: "bottom-left",
            straight: true
          },
          shape: { type: "circle" },
          color: { value: "#ff0000" },
          opacity: {
            value: 0.5
          }
        }
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${contentHeight}px`,
        zIndex: 10
      }}
    />
  );
};

export default ParticleEffect;
