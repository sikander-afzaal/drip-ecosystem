import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ headerToggle, setHeaderToggle }) => {
  return (
    <div
      className={`fixed z-[90] ${
        headerToggle ? "left-0" : "-left-full"
      } lg:sticky top-0 lg:h-auto h-full lg:top-[20px] wrapper bg-white rounded-[40px] bg-opacity-50 backdrop-blur-[28px] px-5 py-[32px] overflow-y-auto lg:p-[32px] transition-all duration-700`}
    >
      <button
        onClick={() => setHeaderToggle(false)}
        className="text-neutral absolute top-4 right-4 lg:hidden block"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <img src="/logo.png" className="w-full max-w-[293px]" alt="" />
      <div className="mt-6 sm:mb-0 mb-10 flex justify-start items-start gap-1 flex-col w-full">
        <SidebarLink name="Home" url="/dapp" ico="/home.png" />
        <SidebarLink
          name="Exchange"
          url="/dapp/exchange/swap"
          ico="/left-and-right-arrows.png"
          options={[
            {
              url: "/dapp/exchange/swap",
              name: "Swap",
            },
            {
              url: "/dapp/exchange/liquidity",
              name: "Liquidity",
            },
          ]}
        />
        <SidebarLink
          name="DripFARM"
          url="/dapp/farm"
          ico="/direction-sign.png"
        />
        <SidebarLink
          name="DripLAUNCH"
          url="/dapp/launch"
          ico="/rocket-launch.png"
        />
        <SidebarLink
          name="DripSTORE"
          url="/dapp/store"
          options={[
            {
              url: "/dapp/store/nft",
              name: "NFT Store",
            },
            {
              url: "/dapp/store/wallet",
              name: "My Wallet",
            },
          ]}
          ico="/shopping-cart.png"
        />
        <SidebarLink name="DripREF" url="/dapp/ref" ico="/user.png" />
        <SidebarLink name="More" url="/dapp/more" ico="/grid.png" />
      </div>
      <div className="mt-auto lg:mt-20 w-full flex justify-start items-start flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <img src="/gecko.png" className="w-6 object-contain" alt="" />
          <div className="flex justify-center items-center gap-5">
            <a href="#" target="blank">
              <img src="/discord.png" className="w-6 object-contain" alt="" />
            </a>
            <a href="#" target="blank">
              <img src="/telegram.png" className="w-6 object-contain" alt="" />
            </a>
            <a href="#" target="blank">
              <img src="/twitter.png" className="w-6 object-contain" alt="" />
            </a>
          </div>
        </div>
        <button className="w-full mt-1 h-[51px] shadow-blueShadow text-white text-lg font-bold hover:bg-transparent hover:text-button border-2 border-solid border-button transition-all duration-300 rounded-2xl bg-button ">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarLink = ({ name, ico, url, options }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex w-full justify-start items-start flex-col">
      <Link
        to={url}
        className={`${
          pathname.split("/")[2] === url.split("/")[2]
            ? "bg-primary"
            : "bg-transparent"
        } relative flex justify-start items-center gap-4 w-full px-4 py-3 transition-all duration-300 hover:bg-primary rounded-2xl`}
      >
        <img src={ico} alt="" className="w-6 object-contain" />
        <p
          className={`${
            pathname.split("/")[2] === url.split("/")[2]
              ? "text-[#5DB2E0]"
              : "text-neutral"
          } text-lg hover:text-[#5db2e0] transition-all duration-300`}
        >
          {name}
        </p>
        {pathname.split("/")[2] === url.split("/")[2] && (
          <span className="bg-[#5db2e0] w-[3px] absolute right-4 top-1/2 -translate-y-1/2 h-[55%]"></span>
        )}
      </Link>
      {pathname.split("/")[2] === url.split("/")[2] && options && (
        <div className="flex w-full justify-start items-start flex-col">
          {options.map((elem, idx) => {
            return (
              <Link
                key={idx + elem.name}
                to={elem.url}
                className={` relative flex justify-start items-center gap-4 w-full px-4 py-3`}
              >
                {" "}
                <p
                  className={`${
                    pathname.includes(elem.url)
                      ? "text-[#5DB2E0]"
                      : "text-neutral"
                  } text-lg hover:text-[#5db2e0] transition-all duration-300`}
                >
                  {elem.name}
                </p>
                {pathname.includes(elem.url) && (
                  <span className="bg-[#5db2e0] w-[3px] absolute right-4 top-1/2 -translate-y-1/2 h-[55%]"></span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
