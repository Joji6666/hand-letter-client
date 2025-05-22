import React, { type ReactElement, useState } from "react";

import { Button } from "../buttons/Button";

const categories = ["전체보기", "청첩장", "세미나", "전시회", "파티"];

const templates = [
  {
    id: 1,
    title: "클래식 모던",
    type: "청첩장",
    imageUrl: "https://placehold.co/600x800/9B87F5/FFFFFF?text=Classic+Modern"
  },
  {
    id: 2,
    title: "비즈니스 컨퍼런스",
    type: "세미나",
    imageUrl:
      "https://placehold.co/600x800/6E59A5/FFFFFF?text=Business+Conference"
  },
  {
    id: 3,
    title: "아트 갤러리",
    type: "전시회",
    imageUrl: "https://placehold.co/600x800/7E69AB/FFFFFF?text=Art+Gallery"
  },
  {
    id: 4,
    title: "생일 축하",
    type: "파티",
    imageUrl: "https://placehold.co/600x800/8B5CF6/FFFFFF?text=Birthday+Party"
  },
  {
    id: 5,
    title: "로맨틱 가든",
    type: "청첩장",
    imageUrl: "https://placehold.co/600x800/D6BCFA/FFFFFF?text=Romantic+Garden"
  },
  {
    id: 6,
    title: "테크 밋업",
    type: "세미나",
    imageUrl: "https://placehold.co/600x800/9F7AEA/FFFFFF?text=Tech+Meetup"
  }
];

const Templates = (): ReactElement => {
  const [activeCategory, setActiveCategory] = useState("전체보기");
  const [visibleTemplates, setVisibleTemplates] = useState(6);

  const filteredTemplates =
    activeCategory === "전체보기"
      ? templates
      : templates.filter((template) => template.type === activeCategory);

  const displayedTemplates = filteredTemplates.slice(0, visibleTemplates);

  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700">
            다양한 <span className="text-primary">템플릿</span> 선택
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700 delay-100">
            아름답고 세련된 디자인의 템플릿으로 특별한 순간을 더욱 빛내세요
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-white translate-y-6 "
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }  translate-y-4 transition-all duration-500`}
              style={{ transitionDelay: `${0.05 * index}s` }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTemplates.map((template, index) => (
            <div
              key={template.id}
              className="bg-white rounded-xl overflow-hidden shadow-md card-hover  translate-y-4 opacity-0 animate-fade-in"
              style={{
                animationDelay: `${0.1 * index}s`,
                animationFillMode: "forwards"
              }}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={template.imageUrl}
                  alt={template.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <Button className="mb-6">템플릿 선택하기</Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{template.title}</h3>
                <p className="text-sm text-gray-500">{template.type}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length > visibleTemplates && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => setVisibleTemplates((prev) => prev + 3)}
              className="border-primary text-primary hover:bg-primary/10 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            >
              더 많은 템플릿 보기
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Templates;
