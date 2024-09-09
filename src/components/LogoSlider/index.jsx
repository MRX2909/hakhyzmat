import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import brand_logo from "../../brands/1.png";
import classes from "./styles.module.css";

const LogoSlider = () => {
  return (
    <div>
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
        <div className={classes.sliderLogo}>
          <img src={brand_logo} alt="brand_logo" />
        </div>
        <div className={classes.sliderLogo}>
          <img src={brand_logo} alt="brand_logo" />
        </div>
        <div className={classes.sliderLogo}>
          <img src={brand_logo} alt="brand_logo" />
        </div>
        <div className={classes.sliderLogo}>
          <img src={brand_logo} alt="brand_logo" />
        </div>
        <div className={classes.sliderLogo}>
          <img src={brand_logo} alt="brand_logo" />
        </div>
      </Carousel>
    </div>
  );
};

export default LogoSlider;
