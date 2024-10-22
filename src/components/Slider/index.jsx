import { Carousel } from "react-bootstrap";
import classes from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

const Slider = ({ brands, active }) => {
  console.log(active);
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className={classes.wrapper}>
      <SlickSlider {...sliderSettings}>
        {brands.map((banner) => {
          return (
            <div key={banner.id}>
              <img src={banner.banner_image} className={classes.sliderImage} />
              <Carousel.Caption>
                <h1 className="shadowText" align="left">
                  {banner.banner_name}
                </h1>
                <p className="shadowText" align="left">
                  {banner.banner_description}
                </p>
              </Carousel.Caption>
            </div>
          );
        })}
      </SlickSlider>
      <div className={classes.shaped}></div>
    </div>
  );
};

export default Slider;
