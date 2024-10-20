import { Carousel } from "react-bootstrap";
import classes from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";
import { useState } from "react";

const Slider = ({ brands, activeBanner }) => {
  const [bannerState, setBannerState] = useState(null);
  if (bannerState) bannerState.slideTo(activeBanner);
  return (
    <div className={classes.wrapper}>
      <Swiper
        modules={[Autoplay, Controller, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop
        autoplay
        slidesPerView={1}
        slidesPerGroup={1}
        onSwiper={setBannerState}
      >
        {brands.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <img src={banner.banner_image} className={classes.sliderImage} />
              <Carousel.Caption>
                <h1 className="shadowText" align="left">
                  {banner.banner_name}
                </h1>
                <p className="shadowText" align="left">
                  {banner.banner_description}
                </p>
              </Carousel.Caption>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={classes.shaped}></div>
    </div>
  );
};

export default Slider;
