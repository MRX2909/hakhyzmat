import { Outlet } from "react-router-dom";
import SiteNavbar from "../components/SiteNavbar";
import classes from "./styles.module.css";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <SiteNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
