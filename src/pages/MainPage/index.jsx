import AllBrands from "../../components/AllBrands";
import LogoSlider from "../../components/LogoSlider";
import Slider from "../../components/Slider";
import classes from "./styles.module.css";

const MainPage = () => {
  return (
    <>
      <div className={classes.mainWrapper}>
        <Slider />
        <LogoSlider />
      </div>
      <AllBrands />
    </>
  );
};

export default MainPage;
