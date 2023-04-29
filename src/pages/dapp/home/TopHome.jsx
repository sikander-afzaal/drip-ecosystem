const TopHome = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-1 1.5xl:grid-cols-[1fr__0.5fr] w-full gap-7">
        <div className="flex justify-start items-start flex-col gap-5">
          <h3 className="text-xl sm:text-2xl xl:text-[36px] mb-1 xl:leading-[1.25] font-bold text-neutral">
            The Best DEX with{" "}
            <span className="text-primaryDark">referral system</span> <br />
            and the lowest swap fees on Sui Network
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-5">
            <div className="flex justify-center items-center gap-5 border-2 border-solid border-button p-4 rounded-[40px] bg-white bg-opacity-50 backdrop-blur-[28px] w-full">
              <img src="/lock.png" className="w-[60px] object-contain" alt="" />
              <div>
                <h4 className="text-neutral font-bold text-lg leading-[1]">
                  Total ValueLocked
                </h4>
                <p className="text-button font-bold text-[36px]">$554,670</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="bg-[#9cadce] px-4 flex-col py-3 rounded-[20px] flex justify-start items-start">
                <p className="text-white text-sm">Total Dex Liquidity</p>
                <h4 className="text-white font-bold text-xl">$395,888</h4>
              </div>
              <div className="bg-[#7EC4CF] px-4 flex-col py-3 rounded-[20px] flex justify-start items-start">
                <p className="text-white text-sm">$DRE Supply</p>
                <h4 className="text-white font-bold text-xl">$395,888</h4>
              </div>
              <div className="bg-[#D4AFB9] px-4 flex-col py-3 rounded-[20px] flex justify-start items-start">
                <p className="text-white text-sm">24h DEX Volume</p>
                <h4 className="text-white font-bold text-xl">$395,888</h4>
              </div>
              <div className="bg-[#52B2CF] px-4 flex-col py-3 rounded-[20px] flex justify-start items-start">
                <p className="text-white text-sm">$DRIP Market Cap</p>
                <h4 className="text-white font-bold text-xl">$395,888</h4>
              </div>
            </div>
          </div>
          <img src="/banner1.png" className="w-full object-contain" alt="" />
          <div className="bg-white bg-opacity-50 rounded-[40px] backdrop-blur-[28px] w-full flex justify-start items-start flex-col">
            <div className="p-5 sm:flex-row flex-col xl:p-[32px] border-b border-solid border-[#e1e8ef] flex justify-between items-start sm:items-center gap-3 w-full">
              <div>
                <div className="flex justify-start items-center gap-3">
                  <img
                    src="/user.png"
                    className="w-[36px] object-contain"
                    alt=""
                  />
                  <p className="text-neutral text-[28px] font-bold">DripREF</p>
                </div>
                <p className="text-neutral text-lg font-bold">
                  <span className="text-button">First on-chain</span> referral
                  system
                </p>
              </div>
              <div className="flex justify-start items-start flex-col">
                <p className="text-neutral text-lg">
                  Total Referral Fee Distributed
                </p>
                <p className="text-button font-bold text-[36px]">$409,385</p>
              </div>
            </div>
            <div className="flex justify-between items-start sm:items-center w-full p-5 sm:flex-row flex-col xl:p-[32px]">
              <div className="flex xl:flex-row flex-col justify-start items-start xl:items-center xl:gap-3">
                <p className="text-neutral text-lg">
                  Your Claimable DripREF Fee:
                </p>
                <p className="text-button font-bold text-[36px]">0.00 DRE</p>
              </div>
              <button className="cta-btn">Go to DripREF</button>
            </div>
          </div>
        </div>
        <div className="flex xl:mt-0 sm:mt-9 justify-start items-start flex-col xl:flex-row 1.5xl:flex-col gap-5 w-full">
          <div className="relative  isolate rounded-[40px] bg-button w-full flex justify-start items-start sm:items-center p-5 sm:flex-row flex-col xl:p-[32px]">
            <div className="flex justify-start items-start flex-col">
              <p className="text-white font-bold text-[58px] leading-[1]">
                0.02%
              </p>
              <p className="text-lg text-white mt-1">
                THE LOWEST <br /> SWAP FEE
              </p>
              <button className="text-button font-bold bg-primary rounded-2xl px-[32px] py-3 text-lg mt-6">
                Start Swaping
              </button>
            </div>
            <img
              src="/drip-cartoon.png"
              className="absolute right-0 bottom-0 -z-10 sm:max-w-full max-w-[160px]"
              alt=""
            />
          </div>
          <div className="flex bg-white  overflow-hidden  justify-start items-start flex-col w-full rounded-[40px]">
            <div className="flex justify-start items-center gap-4 w-full p-5  xl:p-[32px] border-[#E1E8EF] border-solid border-b">
              <img
                src="/newspaper.png"
                className="w-[36px] object-contain"
                alt=""
              />
              <p className="text-neutral font-bold text-[28px]">
                <span className="text-button">TOP</span> DripFARM
              </p>
            </div>
            <img
              src="/twitter-img.png"
              className="w-full object-contain mt-[10px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHome;
