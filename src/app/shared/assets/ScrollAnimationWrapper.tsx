import React, { type ReactElement, type ReactNode } from "react";

import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

// 애니메이션 정의
const itemVariants: Variants = {
  hidden: {
    y: 100, // 아래로 100px 위치
    opacity: 0 // 완전히 투명
  },
  visible: {
    y: 0, // 제자리로 이동
    opacity: 1, // 불투명
    transition: {
      type: "spring", // 스프링 애니메이션
      stiffness: 50, // 스프링 강도
      damping: 10 // 스프링 감쇠율
    }
  }
};

const ScrollAnimationWrapper = ({
  children
}: {
  children: ReactNode;
}): ReactElement => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
