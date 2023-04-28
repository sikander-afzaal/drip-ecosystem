import SwapBox from "../../components/SwapBox";
import HomeHeader from "../../layout/HomeHeader";
import Tabs from "./Tabs";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="w-full max-w-[1500px] mx-auto mt-10 flex justify-start items-center flex-col gap-5 sm:gap-12">
        <Tabs />
        <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-[1fr__432px] gap-x-5 xl:gap-x-[50px] items-start w-full px-6">
          <div className="text-base font-bold text-neutral bg-white bg-opacity-50 h-[600px] backdrop-blur-[28px] rounded-[20px] grid place-items-center">
            Đây là chart
          </div>
          <SwapBox widthFull />
        </div>
      </div>
    </>
  );
};

export default Home;
