import React, { type ReactElement, useEffect } from "react";

import { Button } from "../buttons/Button";

const Hero = (): ReactElement => {
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollElements = document.querySelectorAll(".scroll-animate");

      scrollElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight * 0.8) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on load

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-accent/50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-right">
              <span>쉽게 만드는</span>
              <br />
              <span className="hero-text-gradient">모바일 청첩장</span>
              <br />
              <span>그리고 초대장</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-right delay-200">
              특별한 순간을 위한 아름다운 모바일 청첩장과 행사 초대장을
              <br className="hidden md:block" />몇 분 만에 직접 만들고
              공유하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-right delay-300">
              <Button className="btn-primary" size="lg">
                무료로 시작하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                템플릿 둘러보기
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary rounded-full filter blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full filter blur-3xl opacity-30"></div>
              <img
                src="https://placehold.co/600x800/9B87F5/FFFFFF?text=Wedding+Invitation"
                alt="Mobile Wedding Invitation"
                className="w-48 h-auto rounded-2xl shadow-xl rotate-3 absolute top-0 left-4 md:left-16 z-20 animate-scale-in"
              />
              <img
                src="https://placehold.co/600x800/6E59A5/FFFFFF?text=Event+Invitation"
                alt="Mobile Event Invitation"
                className="w-48 h-auto rounded-2xl shadow-xl -rotate-6 absolute top-10 left-32 md:left-40 z-10 animate-scale-in delay-200"
              />
              <img
                src="https://placehold.co/600x800/8B5CF6/FFFFFF?text=Seminar+Invitation"
                alt="Mobile Seminar Invitation"
                className="w-48 h-auto rounded-2xl shadow-xl rotate-6 absolute top-20 left-60 md:left-72 z-0 animate-scale-in delay-300"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold mb-10 scroll-animate opacity-0 translate-y-4 transition-all duration-700">
            신뢰받는 서비스
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {["회사1", "회사2", "회사3", "회사4", "회사5"].map(
              (company, index) => (
                <div
                  key={index}
                  className="text-gray-400 font-semibold text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
