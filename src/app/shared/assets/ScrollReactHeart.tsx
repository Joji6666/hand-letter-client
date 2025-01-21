import React, { type ReactElement } from "react";

import {
  motion,
  type MotionValue,
  useMotionTemplate,
  useTransform
} from "framer-motion";

const ScrollReactHeart = ({
  scrollYProgress
}: {
  scrollYProgress: MotionValue<number>;
}): ReactElement => {
  // 그라데이션 시작(y1) 고정 및 끝(y2) 스크롤에 따라 이동
  const y1 = "100%"; // 고정된 시작점 (아래쪽)
  const y2 = "0%"; // 고정된 끝점 (위쪽)

  // 빨간색의 `offset` 값을 스크롤에 따라 변경
  const redStopOffset = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]); // 100% -> 0%로 변화

  // `useMotionTemplate`으로 문자열 변환
  const redStopOffsetTemplate = useMotionTemplate`${redStopOffset}`;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fixed  top-1/4  "
      opacity={0.9}
    >
      {/* SVG 내부의 linearGradient 정의 */}
      <defs>
        <motion.linearGradient
          id="heartGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          x2="0%"
          y1={y1} // 시작점 고정
          y2={y2} // 끝점 고정
        >
          {/* 연한 빨간색은 항상 상단에 유지 */}
          <stop offset="0%" stopColor="#ffffff" />
          {/* 빨간색은 스크롤에 따라 아래에서 위로 확장 */}
          <motion.stop offset={redStopOffsetTemplate} stopColor="#ff0000" />
        </motion.linearGradient>
      </defs>

      {/* 하트 모양의 path에 그라데이션 적용 */}
      <motion.path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="url(#heartGradient)" // linearGradient 적용
      />
    </motion.svg>
  );
};

export default ScrollReactHeart;
