const FarmBox = () => {
  return (
    <div className="flex justify-start items-start flex-col rounded-[40px] bg-white bg-opacity-50 backdrop-blur-[28px] border-2 border-solid border-button w-full">
      <div className="flex border-b border-solid border-[#E1E8EF] justify-between items-center py-6 px-4 1.5xl:px-[32px] w-full">
        <div className="flex justify-start items-center gap-4">
          <div className="flex justify-start items-center">
            <img
              src="/drip-symbol.png"
              className="w-[36px] object-contain"
              alt=""
            />
            <img
              src="/usdt.png"
              className="-ml-2 z-10 w-[36px] object-contain"
              alt=""
            />
          </div>
          <div>
            <p className="text-neutral font-bold text-xl">DRIP/USDT</p>
            <p className="text-lightGray text-lg font-bold">Liquidity: $557</p>
          </div>
        </div>
        <p className="rounded-[20px] bg-[#7ec4cf] text-xl font-bold text-white grid place-items-center px-[14px] py-3 ">
          2x
        </p>
      </div>
      <div className="flex justify-between items-center w-full py-4 px-4 1.5xl:px-[32px]">
        <div>
          <p className="text-neutral text-lg">Current APR</p>
          <p className="text-button font-bold text-[36px]">115.92%</p>
        </div>
        <button className="cta-btn">Farm</button>
      </div>
    </div>
  );
};

export default FarmBox;
