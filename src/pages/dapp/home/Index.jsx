const Home = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-[1fr__0.5fr] w-full gap-10">
        <div className="flex justify-start items-start flex-col gap-5">
          <h3 className="text-[36px] mb-1 leading-[1.25] font-bold text-neutral">
            The Best DEX with{" "}
            <span className="text-primaryDark">referral system</span> <br />
            and the lowest swap fees on Sui Network
          </h3>
          <div className="grid grid-cols-2 w-full gap-8">
            <div className="flex justify-center items-center gap-5 border-2 border-solid border-button p-4 rounded-[40px] bg-white bg-opacity-50 backdrop-blur-[28px] w-full">
              <img src="/lock.png" className="w-[60px] object-contain" alt="" />
              <div>
                <h4 className="text-neutral font-bold text-lg leading-[1]">
                  Total ValueLocked
                </h4>
                <p className="text-button font-bold text-[36px]">$554,670</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="bg-[#9cadce] px-4 flex-col py-3 rounded-[20px] flex justify-start items-start">
                <p className="text-white ">Total Dex Liquidity</p>
                <h4 className="text-white font-bold text-xl">$395,888</h4>
              </div>
              <div className="bg-[#7EC4CF] px-4 flex-col py-3 rounded-[20px] flex justify-start items-start">
                <p className="text-white ">$DRE Supply</p>
                <h4 className="text-white font-bold text-xl">$395,888</h4>
              </div>
              <div className="bg-[#D4AFB9] px-4 flex-col py-3 rounded-[20px] flex justify-start items-start">
                <p className="text-white ">24h DEX Volume</p>
                <h4 className="text-white font-bold text-xl">$395,888</h4>
              </div>
              <div className="bg-[#52B2CF] px-4 flex-col py-3 rounded-[20px] flex justify-start items-start">
                <p className="text-white ">$DRIP Market Cap</p>
                <h4 className="text-white font-bold text-xl">$395,888</h4>
              </div>
            </div>
          </div>
          <img src="/banner1.png" className="w-full object-contain" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
