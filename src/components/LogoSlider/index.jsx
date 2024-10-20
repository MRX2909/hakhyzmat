import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import classes from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const LogoSlider = ({ brands, swiperState, setActiveBanner }) => {
  return (
    <div className={classes.outerWrapper}>
      <Swiper
        loop
        autoplay
        modules={[Autoplay, Controller]}
        centeredSlides
        centeredSlidesBounds
        slidesPerView={3}
        className="swiper"
        onSwiper={swiperState}
        onSlideChange={(swiper) => setActiveBanner(swiper.activeIndex)}
      >
        {brands.map((brand) => {
          return (
            <SwiperSlide key={brand.id}>
              {({ isActive }) => {
                return (
                  <div
                    className={
                      classes.sliderLogo + (isActive ? " my-swiper-active" : "")
                    }
                    key={brand.id}
                  >
                    <img
                      src={brand.get_brand_icon}
                      alt={brand.brand_name}
                      title={brand.brand_name}
                    />
                  </div>
                );
              }}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
