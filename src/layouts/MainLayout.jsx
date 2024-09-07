import { Outlet } from "react-router-dom";
import SiteNavbar from "../components/SiteNavbar";

const MainLayout = () => {
  return (
    <>
      <SiteNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
