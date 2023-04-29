import Banner from "./Banner";

const Farm = () => {
  return (
    <>
      <Banner />
      <div className="w-full max-w-[1020px] flex justify-start items-start flex-col">
        <div className="p-5 sm:p-[32px] sm:flex-row flex-col my-6 sm:w-auto w-full rounded-[40px] bg-bannerGr flex justify-center text-center sm:text-left items-center gap-8">
          <img
            src="/drip-symbol.png"
            className="w-[60px] object-contain"
            alt=""
          />
          <div>
            <p className="text-white">DRIP in wallet</p>
            <p className="text-white ">
              <span className="font-bold text-2xl">0.0</span> ~ $0.0
            </p>
          </div>
          <div>
            <p className="text-white">DRIP to Harvest</p>
            <p className="text-white ">
              <span className="font-bold text-2xl">0.0</span> ~ $0.0
            </p>
          </div>
          <button className="text-primaryDark font-bold rounded-full bg-primary px-8 py-2 shadow-blueShadow text-base ">
            Harvest
          </button>
        </div>
      </div>
    </>
  );
};

export default Farm;
