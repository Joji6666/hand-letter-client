// import plugins if you need
import { type ReactElement } from "react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function Gallery(): ReactElement {
  const onInit = (): void => {
    console.log("lightGallery has been initialized");
  };

  const images = [
    { src: "/images/main/mobile_1.jpg", alt: "img1" },
    { src: "/images/main/mobile_3.jpg", alt: "img2" },
    { src: "/images/slick/image_1.webp", alt: "img3" },
    { src: "/images/slick/image_2.webp", alt: "img4" }
  ];

  return (
    <div className="p-4">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="w-full flex flex-wrap gap-2"
      >
        {images.map((image, index) => (
          <a href={image.src} key={index}>
            <div className="w-24 h-24">
              <img
                alt={image.alt}
                src={image.src}
                className="rounded-lg hover:scale-105 transition-transform duration-300 object-fill w-full h-full"
              />
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
