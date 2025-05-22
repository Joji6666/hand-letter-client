import React, { type ReactElement } from "react";

const footerLinks = [
  {
    title: "서비스",
    links: [
      { name: "서비스 소개", href: "#" },
      { name: "기능", href: "#features" },
      { name: "템플릿", href: "#templates" },
      { name: "가격", href: "#pricing" },
      { name: "FAQ", href: "#faq" }
    ]
  },
  {
    title: "회사",
    links: [
      { name: "회사 소개", href: "#" },
      { name: "블로그", href: "#" },
      { name: "채용", href: "#" },
      { name: "보도자료", href: "#" },
      { name: "제휴 문의", href: "#" }
    ]
  },
  {
    title: "고객지원",
    links: [
      { name: "사용 가이드", href: "#" },
      { name: "고객센터", href: "#" },
      { name: "1:1 문의", href: "#" },
      { name: "업데이트", href: "#" }
    ]
  },
  {
    title: "법적 정보",
    links: [
      { name: "이용약관", href: "#" },
      { name: "개인정보처리방침", href: "#" },
      { name: "위치기반서비스 이용약관", href: "#" }
    ]
  }
];

const Footer = (): ReactElement => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-2xl font-bold text-primary mb-4 inline-block"
            >
              Hand Letter
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              모바일 청첩장과 초대장 제작 서비스로 특별한 순간을 더 의미있게
              만들어 드립니다.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              <p>© 2025 Invitify. All rights reserved.</p>
              <p className="mt-2">
                <span className="font-semibold">사업자등록번호:</span>{" "}
                123-45-67890 &nbsp;|&nbsp;
                <span className="font-semibold">대표:</span> 홍길동
                &nbsp;|&nbsp;
                <span className="font-semibold">주소:</span> 서울특별시 강남구
                테헤란로 123
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-500 text-sm">
                <span className="font-semibold">고객센터:</span> 1234-5678 (평일
                10:00-18:00)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
