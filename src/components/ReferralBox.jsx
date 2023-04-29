const ReferralBox = () => {
  return (
    <div className="flex justify-start items-start flex-col gap-6 w-full p-5 sm:p-8 rounded-[40px] bg-white bg-opacity-50 backdrop-blur-[28px]">
      <p className="text-base sm:text-lg font-bold text-neutral">
        SWAP referral |{" "}
        <span className="text-button">5% share from swap fee</span>
      </p>
      <div className="flex justify-start items-center gap-3">
        <img
          src="/drip-symbol.png"
          className="w-[60px] object-contain"
          alt=""
        />
        <p className="text-black font-bold text-[28px]">0.00 DRIP</p>
      </div>
      <div className="flex justify-between sm:flex-row flex-col-reverse items-start sm:items-center w-full gap-4 sm:gap-10">
        <button className="cta-btn w-full">Withraw</button>
        <div className="flex justify-start min-w-max items-center gap-2">
          <img
            src="/referral-gray.png"
            className="w-[48px] object-contain"
            alt=""
          />
          <p className="text-lg text-neutral">0 Actives</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralBox;
