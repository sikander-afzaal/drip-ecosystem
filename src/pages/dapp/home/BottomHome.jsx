import FarmBox from "../../../components/FarmBox";

const BottomHome = () => {
  return (
    <div className="flex justify-start items-start flex-col gap-5 mt-8">
      <div className="flex justify-start items-center gap-4 ">
        <img
          src="/direction-sign.png"
          className="w-[36px] object-contain"
          alt=""
        />
        <p className="text-[28px] font-bold text-neutral">
          <span className="text-button">TOP</span> DripFARM
        </p>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-3 w-full gap-3 1.5xl:gap-8">
        <FarmBox />
        <FarmBox />
        <FarmBox />
      </div>
      <div className="flex justify-between items-start 2xl:items-center w-full gap-5 2xl:flex-row flex-col p-[32px] 2xl:p-[60px]  rounded-[40px] bg-white bg-opacity-50 backdrop-blur-[28px]">
        <div className="flex justify-start items-center gap-3">
          <img src="/chat.png" className="w-[60px] object-contain" alt="" />
          <p className="text-neutral text-[36px] font-bold">
            <span className="text-button">Drip</span>SHARE
          </p>
        </div>
        <p className="text-lg text-neutral">
          We listen to Our Community! <br />
          Do You want to share Your feedback with Us?
        </p>
        <button className="cta-btn">DripSHARE it!!</button>
      </div>
    </div>
  );
};

export default BottomHome;
