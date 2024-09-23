import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import classes from "./styles.module.css";
import axios from "axios";

const Slider = () => {
  const [banners, setBanners] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        setBanners(response.data);
      } catch (err) {
        setError("Serwer bilen birikmede näsazlyk ýüze çykdy!");
      } finally {
        setLoading(false);
      }
    };
    fetchData("/api/banners/");
  }, []);

  return (
    <div className={classes.wrapper}>
      <Carousel
        fade
        controls={false}
        indicators={false}
        keyboard={false}
        wrap={true}
        touch={true}
        interval={3000}
      >
        {banners.map((banner) => {
          return (
            <Carousel.Item key={banner.id}>
              <img src={banner.get_image} className={classes.sliderImage} />
              <Carousel.Caption>
                <h1 className="shadowText" align="left">
                  {banner.name}
                </h1>
                <p className="shadowText" align="left">
                  {banner.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className={classes.shaped}></div>
    </div>
  );
};

export default Slider;
