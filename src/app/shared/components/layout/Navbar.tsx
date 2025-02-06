"use client";

import { type ReactElement, useState } from "react";
import Link from "next/link";

import BagIcon from "../icons/BagIcon";
import ProfileIcon from "../icons/ProfileIcon";

export default function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-[6vh] flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2  lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline focus:outline-none focus:ring-0  lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } flex-grow basis-[100%] items-center lg:!flex lg:basis-auto`}
          id="navbarSupportedContent1"
        >
          <Link
            href="/"
            className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 lg:mb-0 lg:mt-0"
          >
            M
          </Link>

          <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row">
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <Link
                href="/workspace"
                className="text-black/60 hover:text-black/80  lg:px-2"
              >
                모바일 청첩장
              </Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <Link
                href="/workspace"
                className="text-black/60 hover:text-black/80  lg:px-2"
              >
                돌잔치 초대장
              </Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <Link
                href="/workspace"
                className="text-black/60 hover:text-black/80   lg:px-2"
              >
                기타 초대장
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center">
          <Link href="/workspace" className="me-4 text-neutral-600 ">
            <BagIcon />
          </Link>

          <div className="relative">
            <Link href="/workspace">
              <ProfileIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
