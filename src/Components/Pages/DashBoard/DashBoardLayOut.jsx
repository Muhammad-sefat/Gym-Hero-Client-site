import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Helmet } from "react-helmet";

const DashBoardLayOut = () => {
  return (
    <>
      <Helmet>
        <title>Gym Hero || Dashboard</title>
      </Helmet>
      <div className="relative min-h-screen md:flex">
        <SideBar />
        <div className="flex-1 ml-10">
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayOut;
