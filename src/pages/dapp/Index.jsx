import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";

const Dapp = () => {
  return (
    <div className="mt-[60px] grid grid-cols-[360px__1fr] gap-x-[50px] w-[90%] mx-auto">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dapp;
