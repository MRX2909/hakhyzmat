import AllBrands from "../../components/AllBrands";
import SlickLogoSlider from "../../components/SlickLogoSlider";
import Slider from "../../components/Slider";
import classes from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [brands, setBrands] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setBrands(response.data);
  };

  useEffect(() => {
    fetchData("/api/brands/");
  }, []);

  return (
    <>
      <div className={classes.mainWrapper}>
        <Slider brands={brands} active={activeIndex} />
        <SlickLogoSlider
          brands={brands}
          setActive={setActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
      <AllBrands brands={brands} />
    </>
  );
};

export default MainPage;
