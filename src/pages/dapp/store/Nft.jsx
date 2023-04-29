import NftBox from "../../../components/NftBox";

const Nft = () => {
  return (
    <div className="wrapper">
      <div className="w-full flex justify-start items-start flex-col">
        <div className="flex xl:flex-row flex-col-reverse justify-between items-start xl:items-center w-full gap-0 xl:gap-5">
          <div className="px-8 py-2 bg-[#d4afb9] rounded-tl-[20px] rounded-tr-[20px] flex justify-center items-center gap-2">
            <img src="/filter.png" className="w-6 object-contain" alt="" />
            <p className="text-white font-bold">Filter</p>
          </div>
          <div className="flex pb-2 sm:flex-row flex-col w-full sm:w-auto justify-center items-center gap-2">
            <p className="text-neutral">
              Your wallet balance:{" "}
              <span className="text-primaryDark font-bold">0.0 DRIP</span>
            </p>
            <button className="leading-[1] px-[32px] py-2 w-full sm:w-auto  shadow-blueShadow text-white text-lg font-bold hover:bg-transparent hover:text-button border-2 border-solid border-button transition-all duration-300 rounded-full bg-button">
              New Pair
            </button>
            <select className="border border-solid border-[#9FD6F3] text-lightGray text-base rounded-full px-4 w-full sm:w-[155px] outline-none bg-primary py-2 bg-transparent ">
              <option className="text-black" value="Sort by">
                Sort by
              </option>
            </select>
          </div>
        </div>
        <div className=" w-full flex justify-start items-center gap-2 bg-[#D4AFB9] -mt-1.5 rounded-[20px] rounded-tl-none px-3 py-8 flex-wrap">
          <p className="text-white">Partner Shops:</p>
          <button className="text-[#D4AFB9] px-6 py-1 border border-solid  border-white bg-white rounded-full hover:bg-white hover:text-[#D4AFB9] transition-all duration-300">
            All
          </button>
          <button className="text-white px-6 py-1 border border-solid border-white bg-transparent rounded-full hover:bg-white hover:text-[#D4AFB9] transition-all duration-300">
            Drip Monster
          </button>
          <button className="text-white px-6 py-1 border border-solid border-white bg-transparent rounded-full hover:bg-white hover:text-[#D4AFB9] transition-all duration-300">
            Water
          </button>
          <button className="text-white px-6 py-1 border border-solid border-white bg-transparent rounded-full hover:bg-white hover:text-[#D4AFB9] transition-all duration-300">
            Fire
          </button>
          <button className="text-white px-6 py-1 border border-solid border-white bg-transparent rounded-full hover:bg-white hover:text-[#D4AFB9] transition-all duration-300">
            Giant Monster
          </button>
        </div>
      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 justify-items-center   2xl:grid-cols-3 w-full gap-6">
        <NftBox />
        <NftBox />
        <NftBox />
        <NftBox />
        <NftBox />
        <NftBox />
      </div>
    </div>
  );
};

export default Nft;
