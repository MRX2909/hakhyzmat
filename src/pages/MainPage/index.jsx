import AllBrands from "../../components/AllBrands";
import LogoSlider from "../../components/LogoSlider";
import Slider from "../../components/Slider";

const MainPage = () => {
  return (
    <>
    <div className="mainWrapper">
      <Slider />
      <LogoSlider />
    </div>
      <AllBrands />
    </>
  );
};

export default MainPage;
