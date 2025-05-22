import Image from "next/image";

import AccountInformation from "@/app/shared/assets/AccountInformation";
import Location from "@/app/shared/assets/Location";
import ScrollAnimationWrapper from "@/app/shared/assets/ScrollAnimationWrapper";
import * as motion from "motion/react-client";

import CountdownElement from "../../shared/assets/CountDown";
import Gallery from "../../shared/assets/Gallery";
import { type Template } from "../types";
import ScrollTriggeredExample from "./SampleScrollAnimation";

export const BASE_TEMPLATES: Template[] = [
  {
    name: "기본 템플릿1",
    imageUrl: "https://placehold.co/600x800/9B87F5/FFFFFF?text=Classic+Modern",
    elements: [
      {
        type: "splash",
        page: 1,
        element: (
          <motion.section
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 }
            }}
            className="w-full h-full  flex flex-col items-center justify-center"
          >
            <p>김진 & 김보미</p>
            <p>2025년 12월 24일 (토) 오후 2시</p>
          </motion.section>
        )
      }
    ]
  },

  {
    name: "기본 템플릿2",
    imageUrl: "https://placehold.co/600x800/9B87F5/FFFFFF?text=Classic+Modern",
    elements: [
      {
        type: "page",
        page: 1,

        element: (
          <section className="w-full h-full  flex flex-col items-center justify-center">
            <div className="relative w-full h-[100vh] overflow-hidden">
              <Image
                src={"/images/slick/image_1.webp"}
                alt="slick-image"
                layout="fill"
              />
            </div>
            <ScrollTriggeredExample />
          </section>
        )
      },
      {
        type: "page",
        page: 2,
        element: <ScrollTriggeredExample />
      },
      {
        type: "gallery",
        page: 3,
        element: (
          <ScrollAnimationWrapper>
            <Gallery />
          </ScrollAnimationWrapper>
        )
      },
      {
        type: "countdown",
        page: 4,
        element: <CountdownElement />
      },
      {
        type: "location",
        page: 5,
        element: <Location />
      },
      {
        type: "accountInformation",
        page: 6,
        element: <AccountInformation />
      }
    ]
  }
];
