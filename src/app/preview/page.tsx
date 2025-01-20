"use client";

import React, { type ReactElement, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useScroll } from "motion/react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { WORK_DATAS } from "../atoms/workDatas";
import ScrollReactHeart from "../shared/assets/ScrollReactHeart";

const PreviewPage = (): ReactElement => {
  const [contentHeight, setContentHeight] = useState(0);

  const containerRef = useRef(null);
  const motionDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const workDatas = useAtomValue(WORK_DATAS);

  // tsParticles 초기화 함수
  const particlesInit = async (engine: any): Promise<void> => {
    await loadFull(engine); // tsParticles의 모든 플러그인 로드
  };

  // scrollYProgress 값 변화 확인
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log("스크롤 진행 상태:", value);
    });

    return (): void => unsubscribe(); // 구독 해제
  }, [scrollYProgress]);

  useEffect(() => {
    if (motionDivRef.current) {
      setContentHeight(motionDivRef.current.scrollHeight);
    }
  }, [workDatas, motionDivRef]);

  return (
    <section
      ref={containerRef}
      className="w-[100vw] h-[94vh] flex flex-col items-center justify-center"
    >
      <motion.div
        ref={motionDivRef}
        className="w-[480px] overflow-y-auto h-full relative"
      >
        {/* tsParticles 설정 */}
        {contentHeight > 0 && (
          <Particles
            height={`${contentHeight}px`}
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: false }, // 부모 요소로 제한
              particles: {
                number: { value: 15 }, // 파티클 개수
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
        )}

        {workDatas.map((workData, index) => (
          <div key={`workData-${index}`} className="p-4 border-b">
            {workData.element}
          </div>
        ))}

        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
          <ScrollReactHeart scrollYProgress={scrollYProgress} />
        </div>
      </motion.div>
    </section>
  );
};

export default PreviewPage;
