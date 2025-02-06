import { type ReactElement } from "react";

import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export default function ScrollTriggeredExample(): ReactElement {
  return (
    <div style={containerStyle}>
      {content.map((item, index) => (
        <ScrollItem key={index} text={item} index={index} />
      ))}
    </div>
  );
}

interface ScrollItemProps {
  text: string;
  index: number;
}

function ScrollItem({ text, index }: ScrollItemProps): ReactElement {
  return (
    <motion.div
      className={`scroll-item-${index}`}
      style={itemStyle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={itemVariants}
    >
      {text}
    </motion.div>
  );
}

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

const containerStyle: React.CSSProperties = {
  margin: "0 auto",
  padding: "50px 0",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "20px"
};

const itemStyle: React.CSSProperties = {
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  textAlign: "center",
  fontSize: "18px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
};

const content = [
  "Scroll-triggered animation 1",
  "Scroll-triggered animation 2",
  "Scroll-triggered animation 3",
  "Scroll-triggered animation 4"
];
