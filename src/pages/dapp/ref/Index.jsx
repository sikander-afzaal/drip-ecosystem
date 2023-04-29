import Banner from "../../../components/Banner";
import ReferralBox from "../../../components/ReferralBox";

const DripRef = () => {
  return (
    <>
      <Banner
        img="/store-cartoon.png"
        title="DripREF"
        desc="Enjoy the most advanced referral programme in DeFi"
        sub="Earn $DRIP commission reward for your referrals swaps and DripLAUNCH purchases and up to 5% of their profit from DripFARM."
      />
      <div className="w-full mx-auto overflow-x-hidden max-w-[1020px] mt-7">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-4 xl:gap-6">
          <div className="flex justify-center px-4 py-6 sm:p-8 gap-3 rounded-[40px] bg-[#7EC4CF] items-start flex-col">
            <p className="font-bold text-2xl text-white">
              Your DripREF Profile
            </p>
            <div className="flex justify-start w-full items-center gap-10">
              <img
                src="/user-white.png"
                className="w-[80px] min-w-[80px] object-contain"
                alt=""
              />
              <div className="flex justify-start items-start gap-1 flex-col w-full">
                <p className="text-white">Your Referral link</p>
                <input
                  type="text"
                  placeholder="www.drip.ecosystem/?referral="
                  className="text-base text-lightGray px-4 py-2 bg-white rounded-full w-full max-w-[346px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col gap-4 xl:gap-6 w-full">
            <div className="flex justify-between items-center w-full bg-[#9CADCE] rounded-[40px] px-4 py-6 sm:p-8">
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/referrals.png"
                  className="w-[48px] object-contain"
                  alt=""
                />
                <p className="text-lg leading-[1.2] text-white">
                  Active <br />
                  Referrals
                </p>
              </div>
              <div className="flex justify-start items-start flex-col gap-1">
                <p className="text-white font-bold text-2xl">0.00 DRIP</p>
                <p className="text-white text-sm">Total Referral Income</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full bg-[#D4AFB9] rounded-[40px] px-4 py-6 sm:p-8">
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/rewards.png"
                  className="w-[48px] object-contain"
                  alt=""
                />
                <div className="flex justify-start items-start flex-col gap-1">
                  <p className="text-white text-sm">Claimable Rewards</p>
                  <p className="text-white font-bold text-2xl">0.00 DRIP</p>
                </div>
              </div>
              <button className="rounded-full bg-white text-base font-bold text-[#D4AFB9] px-4 py-1.5">
                Withraw All
              </button>
            </div>
          </div>
        </div>
        <div className="grid mt-6 grid-cols-1 sm:grid-cols-referralGrid w-full gap-6">
          <ReferralBox />
          <ReferralBox />
          <ReferralBox />
          <ReferralBox />
        </div>
        <div className="flex mt-7 justify-start items-start flex-col gap-5 w-full">
          <div className="flex sm:flex-row flex-col justify-between items-start sm:gap-0 gap-4 sm:items-center w-full">
            <p className="text-neutral text-2xl font-bold">
              Referrals list{" "}
              <span className="text-primaryDark text-lg font-bold">
                (0 active referrals)
              </span>
            </p>
            <input
              placeholder="Search farm"
              type="text"
              className="border border-solid placeholder:text-lightGray border-[#9FD6F3] text-lightGray text-base rounded-full px-4 w-full sm:w-[200px] outline-none bg-primary py-2 bg-transparent "
            />
          </div>
          <div className="flex justify-start items-start flex-col bg-white bg-opacity-50 backdrop-blur-[28px] overflow-x-auto rounded-[40px] pb-4 w-full xl:max-w-none  lg:max-w-[550px]  gap-4 ">
            <div className="grid min-w-[750px]  grid-cols-[2fr__1fr__1fr__1fr] w-full gap-3 px-[32px] py-4 border-b border-solid border-[#E1E8EF]">
              <p className="text-neutral font-bold ">Wallet</p>
              <p className="text-neutral font-bold ">SWAP share</p>
              <p className="text-neutral font-bold ">DripFARM share</p>
              <p className="text-neutral font-bold ">Total share</p>
            </div>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </div>
        </div>
      </div>
    </>
  );
};

export default DripRef;

const TableRow = () => {
  return (
    <div className="grid min-w-[750px]   grid-cols-[2fr__1fr__1fr__1fr] w-full gap-3 px-[32px]">
      <p className="text-neutral">3240f90fa0u02rfh9238rhq0w10n</p>
      <p className="text-neutral ">0.0000</p>
      <p className="text-neutral ">0.0000</p>
      <p className="text-neutral ">0.0000</p>
    </div>
  );
};
