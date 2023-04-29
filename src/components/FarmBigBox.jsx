import { useState } from "react";

const FarmBigBox = () => {
  const [detailsShown, setDetailsShown] = useState(false);
  return (
    <div className="w-full flex flex-col justify-start items-start overflow-hidden bg-white bg-opacity-50 backdrop-blur-[28px] rounded-[20px]">
      <div className="flex justify-between border-b border-solid border-primary py-4 px-8 items-center gap-2 w-full">
        <div className="flex justify-start items-start flex-col ">
          <p className="text-lg font-bold text-neutral">DRIP-USDT</p>
          <div className="flex justify-start items-center gap-2">
            <p className="rounded-full border border-solid border-primaryDark px-2 py-1 flex justify-center items-center gap-1">
              <img
                src="/badge-check.png"
                className="w-[18px] object-contain"
                alt=""
              />{" "}
              Core
            </p>
            <p className="text-white rounded-full w-8 h-8 grid place-items-center bg-[#7ec4cf]">
              2X
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/drip-symbol.png"
            className="w-[36px] object-contain"
            alt=""
          />
          <img
            src="/usdt.png"
            className="w-[36px] object-contain -ml-2"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-start px-8 items-start flex-col gap-5 py-4 w-full">
        <div className="w-full flex-col flex justify-start items-start gap-2">
          <p className="flex justify-between items-center gap-2 text-neutral w-full">
            APR <strong>000</strong>
          </p>
          <p className="flex justify-between items-center gap-2 text-neutral w-full">
            Earn <strong>DRIP</strong>
          </p>
        </div>
        <div className="flex justify-between sm:flex-row flex-col items-start sm:items-center gap-3 w-full">
          <div>
            <p className="text-neutral font-bold">
              <span className="text-primaryDark">DRIP</span> EARNED
            </p>
            <p className="text-button text-[36px] font-bold">242,341</p>
          </div>
          <button className="invert-cta">Harvest</button>
        </div>
        <div className="flex justify-start items-start flex-col w-full gap-3">
          <p className="text-neutral font-bold">
            <span className="text-primaryDark">DRIP-USDT</span> Staked
          </p>
          <button className="cta-btn w-full">Approve Contract</button>
        </div>
      </div>
      <button
        onClick={() => setDetailsShown((prev) => !prev)}
        className="flex font-bold gap-4 w-full mt-3 text-button justify-center items-center py-6 px-[10px] border-t border-solid border-primary"
      >
        Details{" "}
        <img
          src="/caret-down.png"
          alt=""
          className={`transition-all duration-300 ${
            detailsShown ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`flex transition-all duration-700 justify-start items-start flex-col gap-3 w-full px-8 ${
          detailsShown ? "max-h-[7000px] pb-4" : "max-h-0"
        }`}
      >
        <p className="flex justify-between items-center gap-2 text-neutral w-full">
          Total Liquidity <strong>000</strong>
        </p>
        <p className="flex justify-start items-center gap-2 text-primaryDark">
          Get DRIP-USDT{" "}
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
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </p>
        <p className="flex justify-start items-center gap-2 text-primaryDark">
          View Contract{" "}
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
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default FarmBigBox;
