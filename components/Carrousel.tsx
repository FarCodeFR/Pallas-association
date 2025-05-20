"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import { PartnerCarouselProps } from "@/types/Partner";
import "../styles/carrousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

function PartnerCarousel({ partnerImages, ariaLabel }: PartnerCarouselProps) {
  return (
    <>
      <Swiper
        role="region"
        aria-roledescription="carrousel"
        aria-label={ariaLabel}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<button class="${className}" type="button" aria-label="Aller à la diapositive ${
              index + 1
            }"></button>`;
          },
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Keyboard]}
        className="mySwiper"
      >
        {partnerImages.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="partner-slide-content">
              <Image
                src={partner.image}
                alt={partner.alt}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PartnerCarousel;
