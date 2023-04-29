const Banner = ({ title, img, desc, sub }) => {
  return (
    <div className="wrapper bg-[#9FD6F380] backdrop-blur-[28px] px-5 rounded-3xl sm:rounded-[40px]">
      <div
        className={`flex justify-start sm:flex-row flex-col-reverse  ${
          sub ? "h-auto py-5" : "sm:h-[120px] py-5 sm:p-0"
        } xl:h-[150px] max-w-[1020px] items-start gap-4  sm:items-center w-full relative`}
      >
        <div>
          <h3
            className={`text-button   ${
              sub ? "text-[28px]" : "mb-2 text-3xl xl:text-[42px]"
            } font-bold`}
          >
            {title}
          </h3>
          <p className="text-base sm:text-lg xl:text-2xl font-bold text-white">
            {desc}
          </p>
          {sub && <p className="text-primaryDark  max-w-[500px]">{sub}</p>}
        </div>
        <img
          src={img}
          alt=""
          className="sm:absolute -z-10 w-[140px]  self-center xl:w-[175px] object-contain right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default Banner;
