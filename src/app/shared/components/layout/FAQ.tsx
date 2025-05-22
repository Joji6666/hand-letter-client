import React, { type ReactElement } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../accordion";

const faqs = [
  {
    question: "청첩장 제작은 얼마나 걸리나요?",
    answer:
      "템플릿 선택 후 정보를 입력하면 약 5-10분이면 모바일 청첩장을 완성할 수 있습니다. 사용자 경험을 고려하여 직관적인 인터페이스로 제작되었습니다."
  },
  {
    question: "청첩장/초대장은 어떻게 공유하나요?",
    answer:
      "생성된 링크를 카카오톡, 문자메시지, 이메일, SNS 등으로 간편하게 공유할 수 있습니다. QR코드도 제공되어 다양한 방식으로 게스트에게 전달할 수 있습니다."
  },
  {
    question: "청첩장/초대장은 얼마나 유지되나요?",
    answer:
      "기본적으로 행사일로부터 30일 이후까지 청첩장/초대장이 유지됩니다. 프리미엄 플랜에서는 최대 1년까지 연장 가능합니다."
  },
  {
    question: "몇 명까지 초대할 수 있나요?",
    answer:
      "기본 플랜에서는 최대 50명까지 초대 가능합니다. 프리미엄 및 비즈니스 플랜에서는 무제한으로 초대 가능합니다."
  },
  {
    question: "초대장 디자인을 직접 수정할 수 있나요?",
    answer:
      "네, 모든 템플릿은 색상, 폰트, 이미지 등을 취향에 맞게 직접 수정할 수 있습니다. 프리미엄 플랜에서는 고급 커스터마이징 옵션이 더 제공됩니다."
  },
  {
    question: "참석 여부를 어떻게 확인할 수 있나요?",
    answer:
      "각 초대장에는 RSVP 기능이 포함되어 있어 게스트들이 참석 여부를 응답할 수 있습니다. 관리자 대시보드에서 실시간으로 참석 현황을 확인할 수 있습니다."
  }
];

const FAQ = (): ReactElement => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700">
            자주 묻는 <span className="text-primary">질문</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700 delay-100">
            궁금하신 점을 확인해 보세요
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 delay-200"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
