import Image from "next/image";
import { Template } from "../types";
import * as motion from "motion/react-client";
import ScrollTriggeredExample from "./SampleScrollAnimation";

export const BASE_TEMPLATES: Template[] = [
  {
    name: "기본 템플릿1",
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
            className="w-full h-full bg-zinc-100 flex flex-col items-center justify-center"
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
    elements: [
      {
        type: "page",
        page: 1,
        element: (
          <section className="w-full h-full bg-zinc-100 flex flex-col items-center justify-center">
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
      }
    ]
  }
];
