import SwapBox from "../../../components/SwapBox";

const Swap = () => {
  return (
    <div className="wrapper">
      <div className="flex justify-center items-center flex-col w-full max-w-[1020px]">
        <div className="w-full relative pb-4 xl:pb-0 xl:h-[80px] px-4 2xl:px-8 flex justify-end items-start xl:items-center xl:flex-row flex-col gap-2 rounded-[20px] bg-bannerGr">
          <img
            src="/drip-coins.png"
            className="w-[164px] object-contain xl:absolute left-0 2xl:left-7 top-1/2 xl:-translate-y-1/2"
            alt=""
          />
          <div className="flex justify-start flex-col md:flex-row xl:flex-row lg:flex-col items-start xl:items-center gap-4 2xl:gap-8">
            <p className="text-primary xl:text-right text-base 2xl:text-lg font-bold">
              Earn up to 80% trading fee <br className="md:block hidden" />
              Cash-back returned in DRIP
            </p>
            <div className="bg-[#9FD6F3] h-[54px] w-[1px] xl:block hidden"></div>
            <p className="text-primary 2xl:text-base text-sm">
              Claimable <br className="md:block hidden" />
              Cash-back
            </p>
            <p className="text-white font-bold text-xl 2xl:text-2xl">
              5000 DRIP
            </p>
            <button className="text-primaryDark font-bold rounded-full bg-primary px-4 py-[6px] shadow-blueShadow text-base ">
              Claim Rewards
            </button>
          </div>
        </div>
        <div className="grid items-start mt-6 md:mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 w-full md:gap-8 gap-5">
          <SwapBox widthFull walletConnected />
          <div className="flex justify-start items-start bg-white bg-opacity-50 backdrop-blur-[28px] rounded-[20px] flex-col w-full">
            <p className="text-neutral text-2xl font-bold py-4 px-[32px] border-b border-solid border-primary w-full">
              Routing
            </p>
            <div className="px-[32px] pt-2 pb-4 w-full flex justify-start items-start flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <p className="text-lightGray font-bold">Input</p>{" "}
                <p className="text-lightGray font-bold">Output</p>{" "}
              </div>
              <RoutingRow input="124419" output="124419" />
              <RoutingRow input="124419" output="124419" />
              <RoutingRow input="124419" output="124419" />
              <RoutingRow input="124419" output="124419" />
              <RoutingRow input="124419" output="124419" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;

const RoutingRow = ({ input, output }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-neutral flex justify-start items-center gap-2">
        {input} <img className="w-5 object-contain" src="/bnb.png" alt="" />
      </p>
      <p className="text-neutral flex justify-start items-center gap-2">
        {output}{" "}
        <img className="w-5 object-contain" src="/drip-symbol.png" alt="" />
      </p>
    </div>
  );
};
