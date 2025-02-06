import { type ReactElement, useState } from "react";

import * as motion from "motion/react-client";
import Countdown from "react-countdown";

export default function CountdownElement(): ReactElement {
  const targetDate = new Date("2025-01-31T23:59:59");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = (): void => {
    setIsCompleted(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 }
      }}
      className="w-full flex flex-col items-center justify-center"
    >
      {!isCompleted ? (
        <>
          <h1>시작까지</h1>
          <Countdown
            date={targetDate}
            onComplete={handleComplete}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="w-full flex items-center justify-center gap-4">
                <p>{days}:</p>
                <p>{hours}:</p>
                <p>{minutes}:</p>
                <p>{seconds}</p>
              </div>
            )}
          />
        </>
      ) : (
        <div>
          <h1>카운트다운이 완료되었습니다!</h1>
          <p>이제 새로운 UI를 보여줍니다.</p>
        </div>
      )}
    </motion.section>
  );
}
