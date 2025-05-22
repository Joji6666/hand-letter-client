"use client";

import React, { type ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Menu, X } from "lucide-react";

import { Button } from "../buttons/Button";

export default function Navbar(): ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Hand Letter
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            기능
          </a>
          <a
            href="#templates"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            템플릿
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            가격
          </a>
          <a
            href="#faq"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            FAQ
          </a>
          <Link
            href="/auth"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            로그인
          </Link>
          <Button className="ml-4" onClick={() => router.push("/workspace")}>
            시작하기
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 animate-fade-in-up">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-primary transition-colors py-2"
            >
              기능
            </a>
            <a
              href="#templates"
              className="text-gray-600 hover:text-primary transition-colors py-2"
            >
              템플릿
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary transition-colors py-2"
            >
              가격
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-primary transition-colors py-2"
            >
              FAQ
            </a>
            <Link
              href="/auth"
              className="text-gray-600 hover:text-primary transition-colors  py-2"
            >
              로그인
            </Link>
            <Button className="w-full">시작하기</Button>
          </div>
        </div>
      )}
    </header>
  );
}
