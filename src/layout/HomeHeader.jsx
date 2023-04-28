import { useState } from "react";

const HomeHeader = () => {
  const [headerToggle, setHeaderToggle] = useState(true);
  return (
    <header className="flex justify-center items-stretch w-full px-6 mt-6">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="cursor-pointer bg-black bg-opacity-60 w-full h-full z-[88] fixed top-0 left-0 2xl:hidden block"
        ></div>
      )}
      <div className="rounded-tl-[20px] rounded-bl-[20px] backdrop-[28px] flex justify-between items-center w-full 2xl:w-[55%] bg-white bg-opacity-50 xl:rounded-[20px] p-4 2xl:p-6">
        <img
          src="/logo.png"
          className="w-[250px] lg:w-[294px] object-contain"
          alt=""
        />
        <nav className="hidden md:flex justify-start xl:pr-4 2xl:pr-6 items-center gap-7 2xl:gap-[60px]">
          <a href="#" className="text-neutral text-lg font-bold">
            Trade
          </a>
          <a href="#" className="text-neutral text-lg font-bold">
            Earn
          </a>
          <a href="#" className="text-neutral text-lg font-bold">
            Win
          </a>
          <a href="#" className="text-neutral text-lg font-bold">
            NFT
          </a>
          <a href="#" className="text-neutral text-lg font-bold">
            Other
          </a>
        </nav>
      </div>
      <div className="hidden 2xl:flex justify-between items-center w-[17%] rounded-[20px] bg-button p-4 2xl:p-6">
        <div className="flex justify-start items-center gap-2">
          <img src="/drip-ico.png" className="w-[44px] object-contain" alt="" />
          <p className="text-lg text-white">$5.2113</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src="/globe.png" className="object-contain w-[36px]" alt="" />
          <img src="/settings.png" className="object-contain w-[36px]" alt="" />
        </div>
      </div>
      <div className="backdrop-[28px] flex justify-between items-center 2xl:min-w-0 xl:min-w-[500px] xl:w-[28%] bg-white bg-opacity-50 rounded-tr-[20px] rounded-br-[20px] xl:rounded-[20px] pr-4 xl:p-4 2xl:p-6 gap-6">
        <div className="relative w-[60%]">
          <button className="hidden xl:flex pr-4 justify-between items-center w-full gap-2 bg-primary rounded-full h-[36px]">
            <div className="flex justify-start items-center gap-3">
              <img src="/bnb.png" className="w-[36px] object-contain" alt="" />
              <p className="text-neutral font-bold">BNB Smart Chain</p>
            </div>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.80794 5.76953L1.09346 1.31215C0.659238 0.791085 1.02976 -4.31825e-07 1.70803 -4.02177e-07L8.29197 -1.14384e-07C8.97024 -8.47357e-08 9.34076 0.791085 8.90654 1.31215L5.19206 5.76953C5.09211 5.88947 4.90789 5.88947 4.80794 5.76953Z"
                fill="#69B7E1"
              />
            </svg>
          </button>
        </div>
        <button className="xl:block hidden shadow-blueShadow bg-button rounded-full h-[36px] w-[40%]  text-white font-bold ">
          Connect Wallet
        </button>
        <button className="text-neutral" onClick={() => setHeaderToggle(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>
      <div
        className={`2xl:hidden flex justify-start items-start flex-col gap-5 pt-[6rem] pb-[3rem] px-5 sm:px-[2rem] w-full sm:max-w-[450px] bg-white border-l-4 z-[91] transition-all duration-700 border-solid border-button fixed top-0 ${
          headerToggle ? "right-0" : "-right-full"
        } h-full`}
      >
        <button className="absolute top-4 left-4 text-neutral">
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
        <nav className="flex md:hidden justify-start flex-col mb-3 items-center w-full sm:items-start gap-5">
          <a href="#" className="text-neutral text-lg font-bold">
            Trade
          </a>
          <a href="#" className="text-neutral text-lg font-bold">
            Earn
          </a>
          <a href="#" className="text-neutral text-lg font-bold">
            Win
          </a>
          <a href="#" className="text-neutral text-lg font-bold">
            NFT
          </a>
          <a href="#" className="text-neutral text-lg font-bold">
            Other
          </a>
        </nav>
        <div className="flex justify-between items-center w-full rounded-[20px] bg-button p-4 2xl:p-6">
          <div className="flex justify-start items-center gap-2">
            <img
              src="/drip-ico.png"
              className="w-[44px] object-contain"
              alt=""
            />
            <p className="text-lg text-white">$5.2113</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src="/globe.png" className="object-contain w-[36px]" alt="" />
            <img
              src="/settings.png"
              className="object-contain w-[36px]"
              alt=""
            />
          </div>
        </div>
        <div className="relative w-full">
          <button className="xl:hidden flex pl-2 pr-4 justify-between items-center w-full gap-2 bg-primary rounded-full h-[46px]">
            <div className="flex justify-start items-center gap-3">
              <img src="/bnb.png" className="w-[36px] object-contain" alt="" />
              <p className="text-neutral font-bold">BNB Smart Chain</p>
            </div>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.80794 5.76953L1.09346 1.31215C0.659238 0.791085 1.02976 -4.31825e-07 1.70803 -4.02177e-07L8.29197 -1.14384e-07C8.97024 -8.47357e-08 9.34076 0.791085 8.90654 1.31215L5.19206 5.76953C5.09211 5.88947 4.90789 5.88947 4.80794 5.76953Z"
                fill="#69B7E1"
              />
            </svg>
          </button>
        </div>
        <button className="xl:hidden shadow-blueShadow bg-button rounded-full h-[46px] w-full  text-white font-bold ">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
