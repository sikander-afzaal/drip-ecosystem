const Liquidity = () => {
  return (
    <div className="wrapper lg:mt-10">
      <div className="flex justify-start items-center flex-col max-w-[1020px] w-full">
        <div className="flex flex-wrap justify-between items-center w-full gap-5">
          <div className="flex justify-start items-center gap-3">
            <input
              type="checkbox"
              id="active"
              className="w-3 h-3 accent-primaryDark"
            />
            <label htmlFor="active" className="text-lightGray">
              Show only my active liquidity pairs
            </label>
          </div>
          <div className="flex justify-start sm:w-auto w-full items-center gap-4">
            <button className="leading-[1] px-[32px] py-2 w-full sm:w-auto  shadow-blueShadow text-white text-lg font-bold hover:bg-transparent hover:text-button border-2 border-solid border-button transition-all duration-300 rounded-full bg-button">
              New Pair
            </button>
            <input
              placeholder="Search Pair"
              type="text"
              className="border border-solid border-[#9FD6F3] text-neutral text-base rounded-full px-4 w-full sm:w-[155px] outline-none py-2 bg-transparent "
            />
          </div>
        </div>
        <div className="flex justify-start items-start flex-col bg-white bg-opacity-50 backdrop-blur-[28px] overflow-x-auto rounded-[40px] pb-4 w-full mt-7 gap-4 ">
          <div className="grid min-w-[750px] lg:min-w-0 grid-cols-[1.4fr__1fr__1fr__1fr] xl:grid-cols-[2fr__1fr__1fr__1fr] w-full gap-3 px-[32px] py-4 border-b border-solid border-[#E1E8EF]">
            <p className="text-neutral font-bold ">Pair</p>
            <p className="text-neutral font-bold ">My Liquidity</p>
            <p className="text-neutral font-bold ">Liquidity</p>
            <p className="text-neutral font-bold ">24h Volume</p>
          </div>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
      </div>
    </div>
  );
};

export default Liquidity;

const TableRow = () => {
  return (
    <div className="grid min-w-[750px] grid-cols-[1.4fr__1fr__1fr__1fr] lg:min-w-0 xl:grid-cols-[2fr__1fr__1fr__1fr] w-full gap-3 px-[32px]">
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
        <p className="text-neutral">DRIP/USDT</p>
      </div>
      <div>
        <p className="text-neutral ">
          0.0000 <span className="text-lightGray text-sm">USDT</span>
        </p>
        <p className="text-neutral mt-1 ">
          0.0000 <span className="text-lightGray text-sm">DRIP</span>
        </p>
      </div>
      <div>
        <p className="text-neutral ">
          0.0000 <span className="text-lightGray text-sm">USDT</span>
        </p>
        <p className="text-neutral mt-1">
          0.0000 <span className="text-lightGray text-sm">DRIP</span>
        </p>
      </div>
      <div>
        <p className="text-neutral ">
          0.0000 <span className="text-lightGray text-sm">USDT</span>
        </p>
        <p className="text-neutral mt-1">
          0.0000 <span className="text-lightGray text-sm">DRIP</span>
        </p>
      </div>
    </div>
  );
};
