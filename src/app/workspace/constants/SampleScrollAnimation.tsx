import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function ScrollTriggeredExample() {
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

function ScrollItem({ text, index }: ScrollItemProps) {
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

// 스타일
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

// 콘텐츠 데이터
const content = [
  "Scroll-triggered animation 1",
  "Scroll-triggered animation 2",
  "Scroll-triggered animation 3",
  "Scroll-triggered animation 4"
];
