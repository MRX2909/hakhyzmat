import AllBrands from "../../components/AllBrands";
import LogoSlider from "../../components/LogoSlider";
import Slider from "../../components/Slider";
import classes from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [brands, setBrands] = useState([]);
  const [activeBanner, setActiveBanner] = useState(0);

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
        <Slider
          brands={brands}
          activeBanner={activeBanner}
        />
        <LogoSlider
          brands={brands}
          setActiveBanner={setActiveBanner}
        />
      </div>
      <AllBrands brands={brands} />
    </>
  );
};

export default MainPage;
