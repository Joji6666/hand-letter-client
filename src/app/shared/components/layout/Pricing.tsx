import React, { type ReactElement, useState } from "react";

import { Check } from "lucide-react";

import { Button } from "../buttons/Button";

const pricingOptions = [
  {
    title: "Basic",
    description: "개인 청첩장을 위한 기본 옵션",
    price: {
      monthly: 0,
      annually: 0
    },
    features: [
      "기본 템플릿 3개",
      "모바일 최적화",
      "게스트북",
      "기본 통계",
      "최대 50명 초대"
    ],
    button: "무료로 시작하기",
    highlight: false
  },
  {
    title: "Premium",
    description: "더 많은 기능과 커스터마이징",
    price: {
      monthly: 39000,
      annually: 29000
    },
    features: [
      "프리미엄 템플릿 전체",
      "모바일 최적화",
      "게스트북 및 댓글",
      "상세 통계 및 분석",
      "무제한 초대",
      "사진 및 동영상 갤러리",
      "실시간 RSVP 관리"
    ],
    button: "프리미엄 시작하기",
    highlight: true
  },
  {
    title: "Business",
    description: "기업 행사 및 세미나를 위한 옵션",
    price: {
      monthly: 99000,
      annually: 89000
    },
    features: [
      "비즈니스 전용 템플릿",
      "모바일 최적화",
      "브랜딩 및 로고 삽입",
      "고급 분석 및 리포트",
      "무제한 초대",
      "출결 관리 시스템",
      "티켓 및 QR코드 생성",
      "기술 지원"
    ],
    button: "비즈니스 문의하기",
    highlight: false
  }
];

const Pricing = (): ReactElement => {
  const [annually, setAnnually] = useState(true);

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700">
            합리적인 <span className="text-primary">가격</span> 정책
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700 delay-100">
            필요에 맞게 선택하는 다양한 요금제
          </p>

          <div className="flex items-center justify-center mt-8 scroll-animate opacity-0 translate-y-4 transition-all duration-700 delay-200">
            <span
              className={`mr-3 ${!annually ? "text-gray-900" : "text-gray-500"}`}
            >
              월간
            </span>
            <button
              onClick={() => setAnnually(!annually)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">요금제 전환</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-primary transition ${
                  annually ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`ml-3 ${annually ? "text-gray-900" : "text-gray-500"}`}
            >
              연간
            </span>
            <span className="ml-2 rounded-full bg-primary/10 text-primary text-xs px-2 py-1">
              20% 할인
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div
              key={option.title}
              className={`rounded-2xl overflow-hidden ${
                option.highlight
                  ? "border-2 border-primary shadow-lg shadow-primary/10 relative"
                  : "border border-gray-200"
              } scroll-animate opacity-0 translate-y-4 transition-all duration-700`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              {option.highlight && (
                <div className="bg-primary text-white text-center text-sm py-1">
                  가장 인기 있는 요금제
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-500 text-sm mb-6">
                  {option.description}
                </p>
                <div className="mb-6">
                  <p className="text-4xl font-bold">
                    {option.price[
                      annually ? "annually" : "monthly"
                    ].toLocaleString()}
                    <span className="text-lg text-gray-500 font-normal">
                      원/월
                    </span>
                  </p>
                  {annually && option.price.annually > 0 && (
                    <p className="text-sm text-gray-500 mt-1">연간 결제 시</p>
                  )}
                </div>
                <Button
                  className={`w-full mb-6 ${option.highlight ? "bg-primary" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                  variant={option.highlight ? "default" : "outline"}
                >
                  {option.button}
                </Button>
                <ul className="space-y-3">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
