"use client";

import React, { type ReactElement, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useScroll } from "motion/react";

import { WORK_DATAS } from "../atoms/workDatas";
import ParticleEffect from "../shared/assets/ParticleEffect";
import ScrollReactHeart from "../shared/assets/ScrollReactHeart";

const PreviewPage = (): ReactElement => {
  const [contentHeight, setContentHeight] = useState(0);

  const containerRef = useRef(null);
  const motionDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: motionDivRef
  });

  const workDatas = useAtomValue(WORK_DATAS);

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
        {contentHeight > 0 && <ParticleEffect contentHeight={contentHeight} />}

        {workDatas.map((workData, index) => (
          <div key={`workData-${index}`} className="p-4 border-b">
            {workData.element}
          </div>
        ))}

        <ScrollReactHeart scrollYProgress={scrollYProgress} />
      </motion.div>
    </section>
  );
};

export default PreviewPage;
