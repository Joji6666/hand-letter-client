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
  // 스크롤에 따라 색상 변화 설정
  const fillColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffcccc", "#ff0000"]
  );

  // fillColor를 문자열로 변환
  const fillColorTemplate = useMotionTemplate`${fillColor}`;

  return (
    <div style={{ height: "200vh", padding: "50px" }}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="200"
        height="200"
        className="fixed top-1/4 left-1/2 transform -translate-x-1/2"
      >
        <motion.path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={fillColorTemplate} // 문자열로 변환한 fill 사용
        />
      </motion.svg>
    </div>
  );
};

export default ScrollReactHeart;
