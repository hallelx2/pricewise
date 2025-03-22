"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const productImages = [
  { src: "/assets/kettle.png", alt: "Kettle" },
  { src: "/assets/laptop.png", alt: "Laptop" },
  { src: "/assets/bag.png", alt: "Bag" },
];

const ProductCarousel = () => {
    return (
      <div className="hero-carousel">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
          {productImages.map((image) => (
            <Image
              src={image.src}
              alt={image.alt}
              width={484}
              height={484}
              className="object-contain"
              key={image.alt}
            />
          ))}
        </Carousel>

        <Image
          src="/assets/hand-drawn-arrow.png"
          alt="arrow"
          width={175}
          height={175}
          className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
        />
      </div>
    )
  }
export default ProductCarousel;
