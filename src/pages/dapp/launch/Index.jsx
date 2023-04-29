import Banner from "../../../components/Banner";

const Launch = () => {
  return (
    <>
      <Banner
        img="/launch-cartoon.png"
        title="DripLAUNCH"
        desc="Initial DEX Offering. From here to the moon."
      />
      <div className="flex justify-start gap-5 mt-6 items-center flex-col mx-auto w-full max-w-[1020px]">
        <button className="cta-btn  mx-auto my-2">Submit Your Project</button>
        <div className="w-full gap-5 xl:gap-[45px]  bg-white bg-opacity-50 backdrop-blur-[28px] rounded-[40px] xl:p-[32px] px-5 py-8 grid grid-cols-1 xl:grid-cols-[120px__1fr__120px]">
          <div className="border-r-0  xl:border-r border-solid border-primary w-full flex justify-center items-start">
            <img
              src="/drip-logo2.png"
              className="w-[100px] object-contain"
              alt=""
            />
          </div>
          <p className="text-base sm:text-lg text-neutral self-center text-center xl:text-left">
            DRIP IDO has completed by receiving great support from the community
            and selling out 37.5m $DRIP and raised 128,822 USDT + 336.1017 BNB.
            Thanks a million for your enthusiastic participation. What an
            amazing ride! All allocated $DRIP grabbed up quickly during this
            time of crypto market, showing great confidence & trust that DripDEX
            community has extended to us. Congratulations to the investors who
            successfully joined in our IDO! Thank you and Let’s make something
            great together!
          </p>
          <div className="w-full flex justify-center items-start">
            <div className="relative">
              <img
                src="/circle.png"
                className="w-[120px] object-contain"
                alt=""
              />
              <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-center flex-col">
                <p className="text-neutral leading-[1]">Finished</p>
                <p className="text-[36px] font-bold leading-[1] text-white">
                  100%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full gap-5 xl:gap-[45px]  bg-white bg-opacity-50 backdrop-blur-[28px] rounded-[40px] xl:p-[32px] px-5 py-8 grid grid-cols-1 xl:grid-cols-[120px__1fr__120px]">
          <div className="border-r-0  xl:border-r border-solid border-primary w-full flex justify-center items-start">
            <img
              src="/drip-logo2.png"
              className="w-[100px] object-contain"
              alt=""
            />
          </div>
          <p className="text-base sm:text-lg text-neutral self-center text-center xl:text-left">
            Congratulations to the investors who successfully joined in our IDO!
            Thank you and Let’s make something great together!
          </p>
          <div className="w-full flex justify-center items-start">
            <div className="relative">
              <img
                src="/circle.png"
                className="w-[120px] object-contain"
                alt=""
              />
              <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-center flex-col">
                <p className="text-neutral leading-[1]">Finished</p>
                <p className="text-[36px] font-bold leading-[1] text-white">
                  100%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full gap-5 xl:gap-[45px]  bg-white bg-opacity-50 backdrop-blur-[28px] rounded-[40px] xl:p-[32px] px-5 py-8 grid grid-cols-1 xl:grid-cols-[120px__1fr__120px]">
          <div className="border-r-0  xl:border-r border-solid border-primary w-full flex justify-center items-start">
            <img
              src="/protofi-logo.png"
              className="w-[100px] object-contain"
              alt=""
            />
          </div>
          <p className="text-base sm:text-lg text-neutral self-center text-center xl:text-left">
            Congratulations to the investors who successfully joined in our IDO!
            Thank you and Let’s make something great together!
          </p>
          <div className="w-full flex justify-center items-start">
            <div className="relative">
              <img
                src="/circle.png"
                className="w-[120px] object-contain"
                alt=""
              />
              <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-center flex-col">
                <p className="text-neutral leading-[1]">Finished</p>
                <p className="text-[36px] font-bold leading-[1] text-white">
                  100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Launch;
