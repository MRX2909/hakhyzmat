import classes from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickLogoSlider = ({ brands, setActive, activeIndex }) => {
  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 300,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current) => setActive(current),
  };
  return (
    <div className={classes.outerWrapper}>
      <Slider {...sliderSettings}>
        {brands.map((brand, index) => {
          return (
            <div
              key={brand.id}
              className={
                classes.logoSlide +
                (index === activeIndex ? " " + classes.activeLogo : "")
              }
            >
              <div className={classes.sliderLogo} key={brand.id}>
                <img
                  src={brand.get_brand_icon}
                  alt={brand.brand_name}
                  title={brand.brand_name}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickLogoSlider;
