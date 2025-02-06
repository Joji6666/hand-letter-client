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
  const y1 = "100%";
  const y2 = "0%";

  const redStopOffset = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]); // 100% -> 0%로 변화

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
      <defs>
        <motion.linearGradient
          id="heartGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          x2="0%"
          y1={y1}
          y2={y2}
        >
          <stop offset="0%" stopColor="#ffffff" />

          <motion.stop offset={redStopOffsetTemplate} stopColor="#ff0000" />
        </motion.linearGradient>
      </defs>

      <motion.path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="url(#heartGradient)"
      />
    </motion.svg>
  );
};

export default ScrollReactHeart;
