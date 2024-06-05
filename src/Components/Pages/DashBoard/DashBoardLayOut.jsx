import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashBoardLayOut = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <SideBar />
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayOut;
