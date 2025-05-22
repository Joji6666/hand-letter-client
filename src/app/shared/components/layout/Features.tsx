import React, { type ReactElement } from "react";

import { Calendar, Link, Settings, Users } from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "간편한 정보 입력",
    description:
      "결혼식 날짜, 장소, 신랑신부 정보를 쉽게 입력하고 아름다운 청첩장을 제작하세요."
  },
  {
    icon: <Link className="h-8 w-8 text-primary" />,
    title: "손쉬운 공유",
    description:
      "생성된 초대장 링크를 카카오톡, 문자메시지, SNS 등으로 손쉽게 공유할 수 있습니다."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "참석 여부 확인",
    description: "참석자들의 RSVP를 실시간으로 확인하고 관리할 수 있습니다."
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "다양한 커스터마이징",
    description:
      "색상, 폰트, 레이아웃을 취향에 맞게 조정하여 나만의 초대장을 만들 수 있습니다."
  }
];

const Features = (): ReactElement => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700">
            특별한 <span className="text-primary">초대장</span>을 만드는 방법
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700 delay-100">
            누구나 쉽게 만들고 공유할 수 있는 모바일 청첩장 및 초대장 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-lg card-hover bg-white border border-gray-100 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex-shrink-0 p-3 bg-accent/30 rounded-lg self-start">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
