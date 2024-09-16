import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import classes from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const LogoSlider = () => {
  const [brands, setBrands] = useState([]);

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setBrands(response.data);
  };

  useEffect(() => {
    fetchData("http://127.0.0.1:8000/api/brands");
  }, []);

  return (
    <div className={classes.outerWrapper}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {brands.map((brand) => {
          return (
            <div className={classes.sliderLogo} key={brand.id}>
              <img src={brand.get_icon} alt={brand.name} title={brand.name} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default LogoSlider;
