import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import { useState } from "react";

const Dapp = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="mt-[60px] items-start grid grid-cols-1 lg:grid-cols-[360px__1fr] gap-x-8 xl:gap-x-[50px] w-[90%] mx-auto">
      <button
        onClick={() => setHeaderToggle(true)}
        className="absolute lg:hidden block text-neutral top-4 left-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      <Sidebar headerToggle={headerToggle} setHeaderToggle={setHeaderToggle} />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dapp;
