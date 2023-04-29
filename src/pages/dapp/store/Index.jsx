import { Outlet } from "react-router-dom";
import Banner from "../../../components/Banner";

const DripStore = () => {
  return (
    <>
      <Banner
        img="/store-cartoon.png"
        title="DripSTORE"
        desc="Welcome to PolySTORE"
        sub="This is the home for your NFTs, where you can exchange NFTs to enrich your collection and earn."
      />
      <div className="w-full max-w-[1020px] mx-auto mt-7">
        <Outlet />
      </div>
    </>
  );
};

export default DripStore;
