import { Outlet } from "react-router-dom";
import SiteNavbar from "../components/SiteNavbar";
import classes from "./styles.module.css";

const MainLayout = () => {
  return (
    <>
      <SiteNavbar />
      <div className={classes.wrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
