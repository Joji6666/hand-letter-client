import React, { type ReactElement, type ReactNode } from "react";

import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

const itemVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10
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
