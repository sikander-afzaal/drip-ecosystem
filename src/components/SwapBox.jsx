const SwapBox = ({ widthFull, walletConnected }) => {
  return (
    <div
      className={`w-full ${
        widthFull ? "" : "max-w-[432px]"
      } rounded-[20px] bg-white bg-opacity-50 backdrop-blur-[28px]  py-5 flex justify-start items-start flex-col gap-5`}
    >
      <div className="px-4">
        <h3 className="text-neutral font-bold text-2xl">Swap</h3>
        <p className="text-neutral mt-1">Trade tokens in an instant</p>
      </div>
      <div className="w-full flex justify-between items-center px-4 border-b border-solid border-primary pb-4">
        <img
          src="/bars.png"
          className="w-6 cursor-pointer object-contain"
          alt=""
        />
        <div className="flex justify-center items-center gap-3">
          {!walletConnected && (
            <img
              src="/fire.png"
              className="w-6 cursor-pointer object-contain"
              alt=""
            />
          )}
          <img
            src="/swap-settings.png"
            className="w-6 cursor-pointer object-contain"
            alt=""
          />
          <img
            src="/time-forward.png"
            className="w-6 cursor-pointer object-contain"
            alt=""
          />
          {!walletConnected && (
            <img
              src="/curve-arrow.png"
              className="w-6 cursor-pointer object-contain"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="px-4 gap-3 flex justify-start items-start flex-col w-full">
        <div className="flex justify-start relative items-start flex-col gap-6 bg-accentBlue rounded-[20px] px-4 py-6 sm:p-6 w-full">
          <div className="flex justify-between items-center gap-4 w-full">
            <input
              type="text"
              className="text-lightGray w-full text-xl font-normal border-none bg-transparent"
              placeholder="0.0"
            />
            <div className="relative">
              <button className="bg-white rounded-full shadow-blueShadowLight px-3 py-[6px] flex justify-center items-center gap-8">
                <div className="flex justify-start items-center gap-2">
                  <img src="/bnb.png" className="w-6 object-contain" alt="" />
                  <p className="text-neutral text-sm font-bold">BNB</p>
                </div>
                <img src="/caret-down.png" className="object-contain " alt="" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 w-full gap-2">
            <button className="w-full border border-solid border-[#80C5EB] bg-[#80C5EB] h-[30px] rounded-lg text-primary text-sm font-bold">
              25%
            </button>
            <button className="w-full border-[#80C5EB] bg-transparent h-[30px] rounded-lg text-[#80C5EB] border border-solid  text-sm font-bold hover:text-primary hover:bg-[#80C5EB] transition-all duration-300">
              50%
            </button>
            <button className="w-full border-[#80C5EB] bg-transparent h-[30px] rounded-lg text-[#80C5EB] border border-solid  text-sm font-bold hover:text-primary hover:bg-[#80C5EB] transition-all duration-300">
              75%
            </button>
            <button className="w-full border-[#80C5EB] bg-transparent h-[30px] rounded-lg text-[#80C5EB] border border-solid  text-sm font-bold hover:text-primary hover:bg-[#80C5EB] transition-all duration-300">
              100%
            </button>
          </div>
          <button className="left-1/2 -translate-x-1/2  absolute -bottom-[4px] translate-y-1/2">
            <img
              src="/switch.png"
              className=" w-[32px] object-contain"
              alt=""
            />
          </button>
        </div>
        <div className="flex justify-start items-start flex-col gap-6 bg-accentBlue rounded-[20px] px-4 py-6 sm:p-6 w-full">
          <div className="flex justify-between w-full items-center gap-4">
            <input
              type="text"
              className="text-lightGray w-full text-xl font-normal border-none bg-transparent"
              placeholder="0.0"
            />
            <div className="relative">
              <button className="bg-white rounded-full shadow-blueShadowLight px-3 py-[6px] flex justify-center items-center gap-8">
                <div className="flex justify-start items-center gap-2">
                  <img src="/cake.png" className="w-6 object-contain" alt="" />
                  <p className="text-neutral text-sm font-bold">BNB</p>
                </div>
                <img src="/caret-down.png" className="object-contain " alt="" />
              </button>
            </div>
          </div>
        </div>
        {!walletConnected && (
          <div className="flex mt-5 justify-between w-full items-center">
            <p className="flex justify-start text-button items-center gap-3">
              Slippage Tolerance{" "}
              <img src="/pen.png" className="w-6 object-contain" alt="" />
            </p>
            <p className="text-button font-bold text-lg">0.5%</p>
          </div>
        )}
        <button className="w-full mt-1 h-[51px] shadow-blueShadow text-white text-lg font-bold hover:bg-transparent hover:text-button border-2 border-solid border-button transition-all duration-300 rounded-2xl bg-button ">
          {!walletConnected ? "Connect Wallet" : "Select a token"}
        </button>
      </div>
    </div>
  );
};

export default SwapBox;
