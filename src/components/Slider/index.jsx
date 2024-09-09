import { Carousel } from "react-bootstrap";
import classes from "./styles.module.css";

const Slider = () => {
  return (
    <Carousel
      fade
      controls={false}
      indicators={false}
      keyboard={false}
      wrap={true}
      touch={true}
      interval={3000}
    >
      <Carousel.Item>
        <img src="/img/img1.jpg" className={classes.sliderImage} />
        <Carousel.Caption>
          <h1 className="shadowText" align="left">
            First slide label
          </h1>
          <p className="shadowText" align="left">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/img2.jpg" className={classes.sliderImage} />
        <Carousel.Caption>
          <h1 align="left">Second slide label</h1>
          <p align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/img3.jpg" className={classes.sliderImage} />
        <Carousel.Caption>
          <h1 align="left">Third slide label</h1>
          <p align="left">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
