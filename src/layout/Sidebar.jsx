import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sticky max-h-max wrapper bg-white rounded-[40px] bg-opacity-50 backdrop-blur-[28px] p-[32px]">
      <img src="/logo.png" className="w-full max-w-[293px]" alt="" />
      <div className="mt-6 flex justify-start items-start gap-1 flex-col w-full">
        <SidebarLink name="Home" url="/dapp" ico="/home.png" />
        <SidebarLink
          name="Exchange"
          url="/dapp/exchange"
          ico="/left-and-right-arrows.png"
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
          ico="/shopping-cart.png"
        />
        <SidebarLink name="DripREF" url="/dapp/ref" ico="/user.png" />
        <SidebarLink name="More" url="/dapp/more" ico="/grid.png" />
      </div>
      <div className="mt-20 w-full flex justify-start items-start flex-col gap-2">
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

const SidebarLink = ({ name, ico, url }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={url}
      className={`${
        pathname === url ? "bg-primary" : "bg-transparent"
      } relative flex justify-start items-center gap-4 w-full px-4 py-3 transition-all duration-300 hover:bg-primary rounded-2xl`}
    >
      <img src={ico} alt="" className="w-6 object-contain" />
      <p
        className={`${
          pathname === url ? "text-[#5DB2E0]" : "text-neutral"
        } text-lg hover:text-[#5db2e0] transition-all duration-300`}
      >
        {name}
      </p>
      {pathname === url && (
        <span className="bg-[#5db2e0] w-[3px] absolute right-4 top-1/2 -translate-y-1/2 h-[55%]"></span>
      )}
    </Link>
  );
};
