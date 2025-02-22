import { type ReactElement } from "react";
import Image from "next/image";

import Slick from "./shared/components/layout/Slick";

export default function Home(): ReactElement {
  return (
    <main className="w-full h-full justify-center items-center">
      <Slick />
      <section className="w-full flex justify-between items-center">
        <div className="relative w-1/2 h-[500px] overflow-hidden">
          <Image
            src={"/images/main/mobile_1.jpg"}
            alt="main-image"
            layout="fill"
          />
        </div>

        <div className="w-1/2">
          <h2 className="font-bold text-2xl ml-12">
            세상에 단 하나뿐인 나만의 청첩장
          </h2>
        </div>
      </section>

      <section className="w-full flex justify-between items-center">
        <div className="w-1/2">
          <h2 className="font-bold text-2xl ml-12">
            세상에 단 하나뿐인 나만의 청첩장
          </h2>
        </div>

        <div className="relative w-1/2 h-[500px] overflow-hidden">
          <Image
            src={"/images/main/mobile_1.jpg"}
            alt="main-image"
            layout="fill"
          />
        </div>
      </section>
    </main>
  );
}
