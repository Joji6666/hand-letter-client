"use client";

import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 1100,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slick = (): ReactElement => {
  return (
    <div className="w-full h-full mb-24">
      <Slider
        {...settings}
        arrows={true}
        autoplay
        autoplaySpeed={4500}
        pauseOnHover
        swipe
      >
        <div className="relative w-full h-[450px] overflow-hidden">
          <Image
            src={"/images/slick/image_1.webp"}
            alt="slick-image"
            layout="fill" // 이미지가 부모 컨테이너에 맞게 채워짐
          />
        </div>

        <div className="relative w-full h-[450px] overflow-hidden">
          <Image
            src={"/images/slick/image_2.webp"}
            alt="slick-image"
            layout="fill"
          />
        </div>

        <div className="relative w-full h-[450px] overflow-hidden">
          <Image
            src={"/images/slick/image_3.webp"}
            alt="slick-image"
            layout="fill"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
