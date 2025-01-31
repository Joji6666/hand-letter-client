import React, { type ReactElement } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleEffect = ({
  contentHeight
}: {
  contentHeight: number;
}): ReactElement => {
  // tsParticles 초기화 함수
  const particlesInit = async (engine: any): Promise<void> => {
    await loadFull(engine); // tsParticles의 모든 플러그인 로드
  };

  return (
    <Particles
      height={`${contentHeight}px`}
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // 부모 요소로 제한
        particles: {
          number: { value: 25 }, // 파티클 개수
          size: { value: 5 }, // 파티클 크기
          move: {
            enable: true,
            speed: 2,
            direction: "bottom-left",
            straight: true
          },
          shape: { type: "circle" },
          color: { value: "#ff0000" },
          opacity: {
            value: 0.5 // 모든 파티클의 투명도를 50%로 설정
          }
        }
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${contentHeight}px`, // 부모 높이에 맞춤
        zIndex: 10
      }}
    />
  );
};

export default ParticleEffect;
