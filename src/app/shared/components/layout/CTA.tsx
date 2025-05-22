import React, { type ReactElement } from "react";

import { Button } from "../buttons/Button";

const CTA = (): ReactElement => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-12 border border-primary/10 text-center relative z-10 scroll-animate opacity-0 translate-y-4 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            특별한 순간을 더 특별하게
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            지금 바로 아름다운 청첩장과 초대장을 제작하고 사랑하는 사람들과
            함께하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8">
              무료로 시작하기
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-primary text-primary hover:bg-primary/10"
            >
              템플릿 둘러보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
