import React, { type ReactElement, useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

const ScrollToTop = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (): void => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return (): void => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 p-3 rounded-full bg-primary text-white shadow-lg transition-opacity z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
