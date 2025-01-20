// import plugins if you need
import { type ReactElement } from "react";
import Image from "next/image";

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
  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="/images/main/mobile_1.jpg">
          <Image
            alt="img1"
            src="/images/main/mobile_1.jpg"
            width={600}
            height={600}
          />
        </a>
        <a href="/images/main/mobile_3.jpg">
          <Image
            alt="img2"
            src="/images/main/mobile_3.jpg"
            width={600}
            height={600}
          />
        </a>
      </LightGallery>
    </div>
  );
}
