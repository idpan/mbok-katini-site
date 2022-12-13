import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../style/style.css";

// import required modules
import { Pagination } from "swiper";

export default function CarouselCard({ children, breakpoints }) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper "
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        481: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((element) => {
            return <SwiperSlide>{element}</SwiperSlide>;
          })
        : "CarouselCard children must be array of component"}
    </Swiper>
  );
}
