import NftBox from "../../../components/NftBox";

const Wallet = () => {
  return (
    <div className="wrapper">
      <div className="flex sm:flex-row flex-col justify-between items-center w-full">
        <p className="font-bold text-2xl text-primaryDark">0 NFTSs</p>
        <div className="flex pb-2 sm:flex-row flex-col w-full sm:w-auto justify-center items-center gap-2">
          <p className="text-neutral">
            Your wallet balance:{" "}
            <span className="text-primaryDark font-bold">0.0 DRIP</span>
          </p>
          <button className="leading-[1] px-[32px] py-2 w-full sm:w-auto  shadow-blueShadow text-white text-lg font-bold hover:bg-transparent hover:text-button border-2 border-solid border-button transition-all duration-300 rounded-full bg-button">
            Buy DRIP
          </button>
        </div>
      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 justify-items-center   2xl:grid-cols-3 w-full gap-6">
        <NftBox earn />
        <NftBox earn />
        <NftBox earn />
        <NftBox earn />
        <NftBox earn />
        <NftBox earn />
      </div>
    </div>
  );
};

export default Wallet;
